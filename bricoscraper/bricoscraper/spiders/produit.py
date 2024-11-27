import scrapy


class ProduitSpider(scrapy.Spider):
    name = "produit"
    allowed_domains = ["www.centrale-brico.com"]
    start_urls = ["https://www.centrale-brico.com"]

    def parse(self, response):

        produits = response.css('article.product-miniature.bx-cb-card')
        
        for produit in produits:
            produit_url=produit.css('h2.product-miniature-title a::attr(href)').get()
            #yield response.follow(produit_url, callback=self.parse_produits_parse)
            
            yield response.follow(produit_url, callback=self.parse_produit_page)


    def parse_produit_page(self, response):
            produit = response.css('div.container-fluid.no-padding')
            prix = produit.css('span.the_price ::attr(content)').get()
            nom_produit = produit.css('header.page-header h1::text').get()
            remise = produit.css('span.text-red ::text').get()
            code = produit.xpath("//span[@id='product-reference']/span[@itemprop='sku']/text()").get() 
            ean13 = produit.xpath("//span[@id='product-ean13']/text()").get()
            ref_fabricant = produit.xpath("//span[@id='product-manufacturer-reference']/text()").get() 
            description = produit.css('#product-description p::text').get()
            yield {
                 'nom': nom_produit,
                 'prix': prix,
                 'remise': remise,
                 'code': code,
                 'EAN 13': ean13,
                 'référence fabricant' : ref_fabricant,
                 'description' : description
                 }
                #récupère toutes les infos d'un produit sans passer à la page suivante

    #def parse_produit_page(self, response):
    #fetch(relative_url) -> .css('span.the_price ::attr(content)').get() donne le prix
    #-> response.css('span.text-red ::text').get() donne le pourcentage de réduction (peut etre à mettre avec un if)
    #-> response.css('h2.product-miniature-title a::attr(href)').get() donne l'url du produit
    #-> response.xpath("//span[@id='product-reference']/span[@itemprop='sku']/text()").get() donne le code sku "Code"
    #-> response.xpath("//span[@id='product-ean13']/text()").get() donne le ean13
    #-> response.xpath("//span[@id='product-manufacturer-reference']/text()").get() donne la référence du fabricant
    #-> response.css('#product-description p::text').get() donne la description de l'article
