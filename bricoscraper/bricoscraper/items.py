# Define here the models for your scraped items
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/items.html

import scrapy


class CategorieItem(scrapy.Item):
    categorie = scrapy.Field()
    id_categorie = scrapy.Field()
    lien_categorie = scrapy.Field()
    type = scrapy.Field()
    id_cat_parent = scrapy.Field()
   
  

class ProduitItem(scrapy.Item):
    nom = scrapy.Field()
    prix = scrapy.Field()
    remise_pourcentage = scrapy.Field()
    code = scrapy.Field()
    EAN_13 = scrapy.Field()
    reference_fabricant = scrapy.Field()
    description = scrapy.Field()
    categorie = scrapy.Field()
    url_produit = scrapy.Field()
    marque = scrapy.Field()