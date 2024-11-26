import scrapy


class BricospiderSpider(scrapy.Spider):
    name = "bricospider"
    allowed_domains = ["www.centrale-brico.com"]
    start_urls = ["https://www.centrale-brico.com/"]

    def parse(self, response):
        pass
