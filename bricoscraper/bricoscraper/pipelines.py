# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html


# useful for handling different item types with a single interface
from itemadapter import ItemAdapter
from scrapy.exceptions import DropItem


class BricoscraperPipeline:
    def __init__(self):
        self.enregistre = set()

    def process_item(self, item, produit):
        adapter = ItemAdapter(item)

        # #verification des doublons
        # if adapter["id_categorie"] in self.categorie:
        #     raise DropItem(f"Duplication trouvé {item!r}")
        # else:
        #     self.enregistre.add(adapter["id_categorie"])

        #verification des doublons
        if adapter["EAN_13"] in self.enregistre:
            raise DropItem(f"Duplication trouvé {item!r}")
        else:
            self.enregistre.add(adapter["EAN_13"])
        
        #verification remise et transforme en float si remise, en N/A si pas de remise
        remise_string=adapter.get('remise_pourcentage')
        if remise_string:
            remise_string=remise_string.replace('-', '').strip()
            remise_string=remise_string.replace('%', '').strip()
            remise_string=remise_string.replace(',', '.')
            adapter['remise_pourcentage']=float(remise_string)
        else:
            adapter['remise_pourcentage'] ='N/A'

        #modification du prix
        prix_string=adapter.get('prix')
        adapter['prix']=float(prix_string)

        #modification du nom
        nom_produit = adapter.get('nom')
        nom_produit=nom_produit.strip("\n")
        for _ in range(10):
            if '    ' in nom_produit:
                nom_produit=nom_produit.strip(' ')
        adapter['nom'] = nom_produit





        return item
    #  def open_spider(self, spider):
    #     self.file = open("items.jsonl", "w")
    # pour directement metre les trucs dans un json, je suppose que ça marche aussi avec un csv 