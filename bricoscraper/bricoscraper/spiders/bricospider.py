
"""
class BricospiderSpider(scrapy.Spider):
    name = "bricospider"
    allowed_domains = ["www.centrale-brico.com"]
    start_urls = ["https://www.centrale-brico.com/"]

    def parse(self, response):
        sous_sous_categories = response.css('ul.menu-home.menu-item-level-2 a::text').getall()
        sous_categories_brutes =response.css('ul.menu-home.menu-item-level-1 a::text').getall()
        categories_brutes=response.css('ul.menu-home.menu-item-level-0 a::text').getall()
        sous_categories = [sous_cat for sous_cat in sous_categories_brutes if sous_cat not in sous_sous_categories]
        categories = [cat for cat in categories_brutes if cat not in sous_sous_categories and cat not in sous_categories]
        

        categories = response.css("ul.menu-item-level-0 > li.category > a")
        sous_categories = response.css("ul.menu-item-level-1 > li.category > a")
        sous_sous_categories = response.css("ul.menu-item-level-2 > li.category > a")
        
        for categorie in categories:
            name=categorie.css("::text").get()
            lien=categorie.css("::attr(href)").get()
            id_categorie =categorie.css("::attr(id)").get()
            liste_categories = {
                    "nom": name,
                    "lien": lien,
                    "id_categorie": id_categorie
                    #"sous_categorie" : []
                }
            yield liste_categories
            """"""
            for sous_categorie in sous_categories:
                name_sous_categorie=sous_categorie.css("::text").get()
                lien_sous_categorie=sous_categorie.css("::attr(href)").get()
                id_sous_categorie =sous_categorie.css("::attr(id)").get()
                if categorie.lower() in lien_sous_categorie:
                    liste_sous_categories =  {
                            "nom_sous_categorie": name_sous_categorie,
                            "lien_sous_categorie": lien_sous_categorie,
                            "id_sous_categorie": id_sous_categorie
                        }
                    liste_categories["sous_categorie"].append(liste_sous_categories)
                    yield liste_sous_categories

                else:
                    yield liste_sous_categories"""


        
"""def parse_categories(self, response):
        categories = response.css("ul.menu-item-level-0 > li.category > a")
        categorie_item = (CategorieItem)

        categorie_item['nom']=categorie.css("::text").get()"""
        #ça donne que le dernier donc il faut revoir les boucles pour obtenir les liens et naviguer entre les différentes sous cat.
        #il faut mettre des url avec le response.follow niania pour arriver sur la page suivante


"""class BricospiderSpider(scrapy.Spider):
    name = "bricospider"
    allowed_domains = ["www.centrale-brico.com"]
    start_urls = ["https://www.centrale-brico.com/"]

    def parse(self, response):
        
        # Récupérer toutes les catégories principales
        categories = response.css("ul.menu-item-level-0 > li.category > a")

        for categorie in categories:
            # Extraire les informations de la catégorie principale
            nom = categorie.css("::text").get()
            lien = categorie.css("::attr(href)").get()
            id_categorie = categorie.css("::attr(id)").get()

            # Construire l'URL complète de la catégorie
            url_categorie = response.urljoin(lien)

            # Passer à la page de la catégorie pour récupérer les sous-catégories
            yield response.follow(url_categorie, callback=self.parse_sous_categories, meta={'nom_categorie': nom, 'id_categorie': id_categorie, 'url_categorie': url_categorie})

    def parse_sous_categories(self, response):
        Parse les sous-catégories d'une catégorie donnée
        nom_categorie = response.meta['nom_categorie']
        id_categorie = response.meta['id_categorie']
        url_categorie = response.meta['url_categorie']

        # Récupérer toutes les sous-catégories
        sous_categories = response.css("ul.menu-item-level-1 > li.category > a")

        for sous_categorie in sous_categories:
            # Extraire les informations de la sous-catégorie
            nom_sous_categorie = sous_categorie.css("::text").get()
            lien_sous_categorie = sous_categorie.css("::attr(href)").get()
            id_sous_categorie = sous_categorie.css("::attr(id)").get()

            # Construire l'URL complète de la sous-catégorie
            url_sous_categorie = response.urljoin(lien_sous_categorie)

            # Passer à la page de la sous-catégorie pour récupérer les sous-sous-catégories
            yield response.follow(url_sous_categorie, callback=self.parse_sous_sous_categories, meta={
                'nom_categorie': nom_categorie,
                'id_categorie': id_categorie,
                'url_categorie': url_categorie,
                'nom_sous_categorie': nom_sous_categorie,
                'id_sous_categorie': id_sous_categorie,
                'url_sous_categorie': url_sous_categorie
            })

    def parse_sous_sous_categories(self, response):
        
        nom_categorie = response.meta['nom_categorie']
        id_categorie = response.meta['id_categorie']
        url_categorie = response.meta['url_categorie']
        nom_sous_categorie = response.meta['nom_sous_categorie']
        id_sous_categorie = response.meta['id_sous_categorie']
        url_sous_categorie = response.meta['url_sous_categorie']

        # Récupérer toutes les sous-sous-catégories
        sous_sous_categories = response.css("ul.menu-item-level-2 > li.category > a")

        for sous_sous_categorie in sous_sous_categories:
            # Extraire les informations de la sous-sous-catégorie
            nom_sous_sous_categorie = sous_sous_categorie.css("::text").get()
            lien_sous_sous_categorie = sous_sous_categorie.css("::attr(href)").get()
            id_sous_sous_categorie = sous_sous_categorie.css("::attr(id)").get()

            # Construire l'URL complète de la sous-sous-catégorie
            url_sous_sous_categorie = response.urljoin(lien_sous_sous_categorie)

            # Créer un dictionnaire avec toutes les informations
            yield {
                'nom_categorie': nom_categorie,
                'id_categorie': id_categorie,
                'url_categorie': url_categorie,
                'nom_sous_categorie': nom_sous_categorie,
                'id_sous_categorie': id_sous_categorie,
                'url_sous_categorie': url_sous_categorie,
                'nom_sous_sous_categorie': nom_sous_sous_categorie,
                'id_sous_sous_categorie': id_sous_sous_categorie,
                'url_sous_sous_categorie': url_sous_sous_categorie
            }


    def parse_sous_sous_categories(self, response):
        
        #Récupère les sous-sous-catégories et yield les résultats finaux.
        
        parent_name = response.meta["parent_name"]
        parent_id = response.meta["parent_id"]
        parent_link = response.meta["parent_link"]

        sous_name = response.meta["sous_name"]
        sous_id = response.meta["sous_id"]
        sous_link = response.meta["sous_link"]

        sous_sous_categories = response.css("ul.menu-item-level-2 > li.category > a")

        if not sous_sous_categories:
            # Si aucune sous-sous-catégorie, on yield jusqu'aux sous-catégories
            yield {
                "Catégorie principale": parent_name,
                "ID catégorie principale": parent_id,
                "Lien catégorie principale": parent_link,
                "Sous-catégorie": sous_name,
                "ID sous-catégorie": sous_id,
                "Lien sous-catégorie": sous_link,
                "Sous-sous-catégorie": "",
                "ID sous-sous-catégorie": "",
                "Lien sous-sous-catégorie": "",
            }

        for sous_sous_categorie in sous_sous_categories:
            name = sous_sous_categorie.css("::text").get()
            lien = sous_sous_categorie.css("::attr(href)").get()
            id_categorie = sous_sous_categorie.css("::attr(id)").get()

            yield {
                "Catégorie principale": parent_name,
                "ID catégorie principale": parent_id,
                "Lien catégorie principale": parent_link,
                "Sous-catégorie": sous_name,
                "ID sous-catégorie": sous_id,
                "Lien sous-catégorie": sous_link,
                "Sous-sous-catégorie": name,
                "ID sous-sous-catégorie": id_categorie,
                "Lien sous-sous-catégorie": lien,
            }
    
                
    def parse(self, response):
        # Extraire les catégories principales (niveau 0)
        categories = response.css("ul.menu-item-level-0 > li.category > a")

        for categorie in categories:
            name = categorie.css("::text").get()
            lien = categorie.css("::attr(href)").get()
            id_categorie = categorie.css("::attr(id)").get()
            url_relative = lien
            f"""

"""class BricospiderSpider(scrapy.Spider):
    name = "bricospider"
    allowed_domains = ["www.centrale-brico.com"]
    start_urls = ["https://www.centrale-brico.com/"]

    def parse(self, response):
        #Récupérer toutes les sous-catégories
        categories = response.css("ul.menu-item-level-0 > li.category > a")
        Liste_categorie = []
        for categorie in categories:
            # Extraire les informations de la sous-catégorie
            nom_categorie = categorie.css("::text").get()
            lien_categorie = categorie.css("::attr(href)").get()
            id_categorie = categorie.css("::attr(id)").get()
            sous_categories = response.css("ul.menu-item-level- > li.category > a").xpath(lien_categorie)

            for sous_categorie in sous_categories:
                nom_sous_categorie=sous_categorie.css("::text").get()
                lien_sous_categorie=sous_categorie.css("::attr(href)").get()
                id_sous_categorie=sous_categorie.css("::attr(id)").get()

                yield {
                    "Catégorie principale": nom_categorie,
                    "ID catégorie principale": id_categorie,
                    "Lien catégorie principale": lien_categorie,
                    "Sous-catégorie": nom_sous_categorie,
                    "ID sous-catégorie": id_sous_categorie,
                    "Lien sous-catégorie": lien_sous_categorie
                }"""
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
                    "nom_categorie": nom_categorie,
                    "lien_categorie": lien_categorie,
                    "id_categorie": id_categorie,
                },
            )

    def parse_sous_categories(self, response):
        sous_categories = response.css("ul.menu-item-level-1 > li.category > a")
        nom_categorie = response.meta["nom_categorie"]
        lien_categorie = response.meta["lien_categorie"]
        id_categorie = response.meta["id_categorie"]

        for sous_categorie in sous_categories:
            # Exclure le contenu de la balise <span>
            nom_sous_categorie = sous_categorie.xpath("text()").get().strip()  # Récupère uniquement le texte hors <span>
            lien_sous_categorie = sous_categorie.css("::attr(href)").get()
            id_sous_categorie = sous_categorie.css("::attr(id)").get()

            yield response.follow(
                lien_sous_categorie,
                callback=self.parse_sous_sous_categories,
                meta={
                        "nom_categorie": nom_categorie,
                        "lien_categorie": lien_categorie,
                        "id_categorie": id_categorie,
                        "nom_sous_categorie": nom_sous_categorie,
                        "id_sous_categorie": id_sous_categorie,
                        "lien_sous_categorie": lien_sous_categorie,
                    
                    },
                )

    def parse_sous_sous_categories(self, response):
        # Récupérer les données de la catégorie et sous-catégorie
        nom_categorie = response.meta["nom_categorie"]
        lien_categorie = response.meta["lien_categorie"]
        id_categorie = response.meta["id_categorie"]
        nom_sous_categorie = response.meta["nom_sous_categorie"]
        lien_sous_categorie = response.meta["lien_sous_categorie"]
        id_sous_categorie = response.meta["id_sous_categorie"]
        categorie_item = CategorieItem()

        # Étape 3 : Récupérer les sous-sous-catégories
        sous_sous_categories = response.css("ul.menu-item-level-2 > li.category > a")
        for sous_sous_categorie in sous_sous_categories:
            nom_sous_sous_categorie = sous_sous_categorie.css("::text").get()
            lien_sous_sous_categorie = sous_sous_categorie.css("::attr(href)").get()
            id_sous_sous_categorie = sous_sous_categorie.css("::attr(id)").get()

            # categorie_item['categorie']=nom_categorie,
            # categorie_item['id_categorie']=id_categorie,
            # categorie_item['lien_categorie']=lien_categorie,
            # categorie_item['sous_categorie']=nom_sous_categorie,
            # categorie_item['id_sous_categorie']=id_sous_categorie,
            # categorie_item['lien_sous_categorie']=lien_sous_categorie,
            # categorie_item['sous_sous_categorie']=nom_sous_sous_categorie,
            # categorie_item['id_sous_sous_categorie']=id_sous_sous_categorie,
            # categorie_item['lien_sous_sous_categorie']=lien_sous_sous_categorie,

            yield CategorieItem(
                categorie = nom_categorie,
                id_categorie = id_categorie,
                lien_categorie = lien_categorie,
                sous_categorie = nom_sous_categorie,
                id_sous_categorie = id_sous_categorie,
                lien_sous_categorie = lien_sous_categorie,
                sous_sous_categorie = nom_sous_sous_categorie,
                id_sous_sous_categorie = id_sous_sous_categorie,
                lien_sous_sous_categorie = lien_sous_sous_categorie
            )


        if not sous_sous_categories:

            categorie_item['categorie']=nom_categorie,
            categorie_item['id_categorie']=id_categorie,
            categorie_item['lien_categorie']=lien_categorie,
            categorie_item['sous_categorie']=nom_sous_categorie,
            categorie_item['id_sous_categorie']=id_sous_categorie,
            categorie_item['lien_sous_categorie']=lien_sous_categorie,
            categorie_item['sous_sous_categorie']=None,
            categorie_item['id_sous_sous_categorie']=None,
            categorie_item['lien_sous_sous_categorie']=None,

            yield categorie_item

            # # Émettre un item pour chaque sous-sous-catégorie
            # yield {
            #     "Catégorie principale": nom_categorie,
            #     "ID catégorie principale": id_categorie,
            #     "Lien catégorie principale": lien_categorie,
            #     "Sous-catégorie": nom_sous_categorie,
            #     "ID sous-catégorie": id_sous_categorie,
            #     "Lien sous-catégorie": lien_sous_categorie,
            #     "Sous-sous-catégorie": nom_sous_sous_categorie,
            #     "ID sous-sous-catégorie": id_sous_sous_categorie,
            #     "Lien sous-sous-catégorie": lien_sous_sous_categorie,
            # }

        # # Si pas de sous-sous-catégories, émettre quand même les données jusqu'à sous-catégorie
        # if not sous_sous_categories:
        #     yield {
        #         "Catégorie principale": nom_categorie,
        #         "ID catégorie principale": id_categorie,
        #         "Lien catégorie principale": lien_categorie,
        #         "Sous-catégorie": nom_sous_categorie,
        #         "ID sous-catégorie": id_sous_categorie,
        #         "lLien sous_catégorie": lien_sous_categorie,
        #         "Sous-sous-catégorie": None,
        #         "ID sous-sous-catégorie": None,
        #         "Lien sous-sous-catégorie": None,
        #     }
