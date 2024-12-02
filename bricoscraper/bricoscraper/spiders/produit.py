from collections.abc import Iterable
import scrapy
from bricoscraper.items import ProduitItem
import csv

class ProduitSpider(scrapy.Spider):
    name = "produit"
    allowed_domains = ["www.centrale-brico.com"]

    @classmethod
    def from_crawler(cls, crawler, *args, **kwargs):
        spider = super(ProduitSpider, cls).from_crawler(crawler, *args, **kwargs)
        # Ajouter dynamiquement une pipeline spécifique à cette spider
        crawler.settings.set('ITEM_PIPELINES', {"bricoscraper.pipelines.BricoscraperPipeline": 300,"bricoscraper.pipelines.SaveToDbPipeline": 600  # Nom complet de votre pipeline
        })
        return spider
    


    #start_urls = ["https://www.centrale-brico.com/electroportatif/equipement-stationnaire/accessoires-compresseur"]
    def start_requests(self): 
         with open('bricospider.csv', 'r') as csvfile:
            reader = csv.reader(csvfile, delimiter=',')
            for row in reader:
                if row[-2] != 'lien_categorie' and row[-1]=="PAGE_LIST":
                     yield scrapy.Request(
                          url=row[-2],
                          callback=self.parse
                     )
    
    
    def parse(self, response):

        produits = response.css('article.product-miniature.bx-cb-card')
        
        for produit in produits:
            produit_url=produit.css('h2.product-miniature-title a::attr(href)').get()
            #yield response.follow(produit_url, callback=self.parse_produits_parse)
            
            yield response.follow(produit_url, callback=self.parse_produit_page, meta={
                 "produit_url" : produit_url
            })

        suivant = response.xpath('//a[@rel="next"]/@href').get()
        if suivant is not None:
             yield response.follow(suivant, callback=self.parse)
             


    def parse_produit_page(self, response):
            produit = response.css('div.container-fluid.no-padding')
            prix_produit = produit.css('span.the_price ::attr(content)').get()
            nom_produit = produit.css('header.page-header h1::text').get()
            remise_produit = produit.css('span.text-red ::text').get()
            code_produit = produit.xpath("//span[@id='product-reference']/span[@itemprop='sku']/text()").get() 
            ean13 = produit.xpath("//span[@id='product-ean13']/text()").get()
            ref_fabricant = produit.xpath("//span[@id='product-manufacturer-reference']/text()").get() 
            description_produit = produit.css('#product-description p::text').get()
            categorie_produit = produit.css('ul.breadcrumb li')[3].css('a span::text').get()
            marque_produit = response.css('img.product-manufacturer-thumbnail.img-fluid.d-block.ml-auto::attr(alt)').get()

            yield ProduitItem(
                 nom = nom_produit,
                 prix = prix_produit,
                 remise_pourcentage = remise_produit,
                 code = code_produit,
                 EAN_13 = ean13,
                 reference_fabricant = ref_fabricant,
                 description = description_produit,
                 categorie = categorie_produit,
                 url_produit = response.meta["produit_url"],
                 marque = marque_produit
            )

