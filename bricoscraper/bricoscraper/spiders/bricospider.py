import scrapy


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
        print(sous_categories)
        print(len(sous_categories))
        print(categories)
        print(len(categories))
        pass
