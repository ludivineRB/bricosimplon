import scrapy
from bricoscraper.items import CategorieItem

class BricospiderSpider(scrapy.Spider):
    name = "bricospider"
    allowed_domains = ["www.centrale-brico.com"]
    start_urls = ["https://www.centrale-brico.com/"]

    def parse(self, response):
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
        sous_categories = response.css("ul.menu-item-level-1 > li.category > a")

        for sous_categorie in sous_categories:
            # Exclure le contenu de la balise <span>
            nom_sous_categorie = sous_categorie.xpath("text()").get().strip()  # Récupère uniquement le texte hors <span>
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
        # Récupérer les données de la catégorie et sous-catégorie
    
        # Étape 3 : Récupérer les sous-sous-catégories
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

        # if not sous_sous_categories:

        #     categorie_item['categorie']=nom_categorie,
        #     categorie_item['id_categorie']=id_categorie,
        #     categorie_item['lien_categorie']=lien_categorie,
            

        #     yield categorie_item

        #modifier les noms pour que l'ordre alphabétique corresponde à l'ordre voulu