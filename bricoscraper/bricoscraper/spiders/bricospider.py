import scrapy
from bricoscraper.items import CategorieItem

class BricospiderSpider(scrapy.Spider):
    name = "bricospider"
    allowed_domains = ["www.centrale-brico.com"]
    start_urls = ["https://www.centrale-brico.com/"]

    @classmethod
    def from_crawler(cls, crawler, *args, **kwargs):
        """_summary_ Permet d'assigner les pipelines à cette spider

        Args:
            crawler (_type_): _description_

        Returns:
            _type_: _description_ la spider BricospiderSpider qui permet de récupérer les catégories
        """
        spider = super(BricospiderSpider, cls).from_crawler(crawler, *args, **kwargs)
        # Ajouter dynamiquement une pipeline spécifique à cette spider
        crawler.settings.set('ITEM_PIPELINES', {"bricoscraper.pipelines.CategoriePipeline": 400, 
                                                "bricoscraper.pipelines.CategoryToDbPipeline": 500 
        })
        return spider
    
    def parse(self, response):
        """ Récupère les catégories principales

        Args:
            response (_type_): _description_ objet de réponse à l'issu de la requête

        Yields:
            _type_: _description_ retourne le lien de chaque catégorie principale, appelle une autre fonction et envoie des infos via meta, et crée un item avec les informations.
        """
        # Étape 1 : Récupérer les catégories principales
        categories = response.css("ul.menu-item-level-0 > li.category > a")
        for categorie in categories:
            nom_categorie = categorie.css("::text").get()
            lien_categorie = categorie.css("::attr(href)").get()
            id_categorie = categorie.css("::attr(id)").get()

            # Suivre les liens des catégories principales
            yield response.follow(
                lien_categorie,
                callback=self.parse_sous_categories,
                meta={
                    "lien_categorie": lien_categorie,
                    "id_cat_parent" : id_categorie
                },
            )
            yield CategorieItem(
                categorie = nom_categorie,
                id_categorie = id_categorie,
                lien_categorie = lien_categorie,
                type = "CAT",
                id_cat_parent = None
                
            )
                #parse_
    def parse_sous_categories(self, response):
        """_summary_ Retourne toutes les sous catégories issues du lien de la catégorie principale.
 
        Args:
            response (_type_): _description_ objet de réponse à l'issu de la requête

        Yields:
            _type_: _description_ retourne le lien de chaque sous-catégorie , appelle une autre fonction et crée un item contenant les informations.
        """
        sous_categories = response.css("ul.menu-item-level-1 > li.category > a")

        for sous_categorie in sous_categories:
            nom_sous_categorie = sous_categorie.xpath("text()").get().strip()  # Récupère uniquement le texte hors <span>, sinon ajoute un +
            lien_sous_categorie = sous_categorie.css("::attr(href)").get()
            id_sous_categorie = sous_categorie.css("::attr(id)").get()

            yield response.follow(
                lien_sous_categorie,
                callback=self.parse_sous_sous_categories,
                meta={
                    "id_cat_parent" : id_sous_categorie
                }
                )
            yield CategorieItem(
                categorie = nom_sous_categorie,
                id_categorie = id_sous_categorie,
                lien_categorie = lien_sous_categorie,
                type = "SOUS_CAT",
                id_cat_parent = response.meta["id_cat_parent"]
            )

            
    def parse_sous_sous_categories(self, response):
        """_summary_ retourne toutes les sous-sous-catégories issues d'un lien sous-catégories. C'est catégories sont des pages listes et contiennent les listes de produits

        Args:
            response (_type_): _description_ description_ objet de réponse à l'issu de la requête

        Yields:
            _type_: _description_ création d'un item dans le 
        """
        sous_sous_categories = response.css("ul.menu-item-level-2 > li.category > a")
        for sous_sous_categorie in sous_sous_categories:
            nom_sous_sous_categorie = sous_sous_categorie.css("::text").get()
            lien_sous_sous_categorie = sous_sous_categorie.css("::attr(href)").get()
            id_sous_sous_categorie = sous_sous_categorie.css("::attr(id)").get()

            yield CategorieItem(
                categorie = nom_sous_sous_categorie,
                id_categorie = id_sous_sous_categorie,
                lien_categorie = lien_sous_sous_categorie,
                type = "PAGE_LIST",
                id_cat_parent = response.meta["id_cat_parent"]
            )

     