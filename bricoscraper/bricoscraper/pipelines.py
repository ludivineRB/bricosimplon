# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html


# useful for handling different item types with a single interface
from itemadapter import ItemAdapter
from scrapy.exceptions import DropItem
from sqlmodel import SQLModel, Session, create_engine
from init_db import engine
from model import Categories, Produits
from sqlalchemy.exc import IntegrityError

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

# class SaveToDb:
#     def __init__(self):
#         # session = Session(engine)
#         # return session
#         pass
    
#     def process_item(self, item, produit):
#         adapter = ItemAdapter(item)
#         session = Session(engine)

#         item_to_add = Produits(adapter.get(item))
#         session.add(item_to_add)
#         item_to_add = adapter.get(item)
#         item_to_add = Produits(**item_to_add.asdict())
#         session.add(item_to_add)
        
#         try:
#              session.commit()
#         except IntegrityError:
#             session.rollback()

#         return item

class SaveToDbPipeline:
    def __init__(self, engine):
        """
        Initialise le pipeline avec un moteur SQLAlchemy/SQLModel.
        """
        self.engine = engine

    @classmethod
    def from_crawler(cls, crawler):
        """
        Méthode de classe permettant de créer l'instance avec l'engine Scrapy.
        """
        # Récupérer le moteur SQLAlchemy à partir des paramètres Scrapy
        db_url = crawler.settings.get("DATABASE_URL")
        if not db_url:
            raise ValueError("DATABASE_URL doit être défini dans les paramètres Scrapy")
        engine = create_engine(db_url)
        return cls(engine)

    def process_item(self, item, spider):
        """
        Ajoute un élément dans la base de données.
        """
        adapter = ItemAdapter(item)

        # Utilisation de la session SQLModel
        with Session(self.engine) as session:
            try:
                # Construire une instance du modèle SQLModel
                item_to_add = Produits(**adapter.asdict())
                session.add(item_to_add)
                session.commit()
            except IntegrityError:
                session.rollback()
                #spider.logger.error(f"Erreur d'intégrité pour l'item {item}")
        return item