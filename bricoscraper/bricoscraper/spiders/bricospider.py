import scrapy


class BricospiderSpider(scrapy.Spider):
    name = "bricospider"
    allowed_domains = ["www.centrale-brico.com"]
    start_urls = ["https://www.centrale-brico.com/"]

    def parse(self, response):
        """sous_sous_categories = response.css('ul.menu-home.menu-item-level-2 a::text').getall()
        sous_categories_brutes =response.css('ul.menu-home.menu-item-level-1 a::text').getall()
        categories_brutes=response.css('ul.menu-home.menu-item-level-0 a::text').getall()
        sous_categories = [sous_cat for sous_cat in sous_categories_brutes if sous_cat not in sous_sous_categories]
        categories = [cat for cat in categories_brutes if cat not in sous_sous_categories and cat not in sous_categories]
        """

        categories = response.css("ul.menu-item-level-0 > li.category > a")
        sous_categories = response.css("ul.menu-item-level-1 > li.category > a")
        sous_sous_categories = response.css("ul.menu-item-level-2 > li.category > a")

        for categorie in categories:
            name=categorie.css("::text").get()
            #lien=categorie.css("::attr(href)").get()
            #for sous_categorie in sous_categories:
                #name_sous_categorie=sous_categorie.css("::text").get()
                #lien_sous_categorie=sous_categorie.css("::attr(href)").get()
            liste
        yield {
                #"level": 0,
                "name": name,
                #"sous_categories": {"name":name_sous_categorie}

            }
        #ça donne que le dernier donc il faut revoir les boucles pour obtenir les liens et naviguer entre les différentes sous cat.
        #il faut mettre des url avec le response.follow niania pour arriver sur la page suivante
        
