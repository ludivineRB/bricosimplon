# Define here the models for your scraped items
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/items.html

import scrapy


class CategorieItem(scrapy.Item):
    # define the fields for your item here like:
    categorie = scrapy.Field()
    id_categorie = scrapy.Field()
    lien_categorie = scrapy.Field()
    sous_categorie = scrapy.Field()
    id_sous_categorie = scrapy.Field()
    lien_sous_categorie = scrapy.Field()
    sous_sous_categorie = scrapy.Field()
    id_sous_sous_categorie = scrapy.Field()
    lien_sous_sous_categorie = scrapy.Field()

class ProduitItem(scrapy.Item):
    nom = scrapy.Field()
    prix = scrapy.Field()
    remise = scrapy.Field()
    code = scrapy.Field()
    EAN_13 = scrapy.Field()
    reference_fabricant = scrapy.Field()
    description = scrapy.Field()
    categorie = scrapy.Field()
    url_produit = scrapy.Field()
    marque = scrapy.Field()