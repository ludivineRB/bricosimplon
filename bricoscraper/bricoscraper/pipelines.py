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
        """_summary_ permet d'initialiser une variable
        """
        self.enregistre = set()


    def process_item(self, item, spider):
        """_summary_  permet de vérifier et nettoyer les données

        Args:
            item (_type_): _description_ un item Categorie
            spider (_type_): _description_ la spider bricospider

        Raises:
            DropItem: _description_

        Returns:
            _type_: _description_ retourne l'item ayant suivi les différents process de transformations
        """
        adapter = ItemAdapter(item)
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


class SaveToDbPipeline:
    def __init__(self, engine):
        """
        Initialise la connexion avec le moteur SQLmodel
        """
        self.engine = engine

    @classmethod
    def from_crawler(cls, crawler):
        """_summary_ Méthode de classe permettant de créer l'instance avec l'engine.

        Args:
            crawler (_type_): _description_ 

        Raises:
            ValueError: _description_ L'adresse de la base doit être préalablement définie

        Returns:
            _type_: _description_ retourne l'objet engine
        """
        
        
        # Récupérer le moteur SQLAlchemy à partir des paramètres Scrapy
        db_url = crawler.settings.get("DATABASE_URL")
        if not db_url:
            raise ValueError("DATABASE_URL doit être défini dans les paramètres Scrapy")
        engine = create_engine(db_url)
        return cls(engine)

    def process_item(self, item, spider):
        """_summary_ ajout de l'item dans la base de données

        Args:
            item (_type_): _description_
            spider (_type_): _description_

        Returns:
            _type_: _description_
        """
        adapter = ItemAdapter(item)
        with Session(self.engine) as session:
            try:
                # Construction d'une instance du modèle SQLModel, le modèle reçoit l'item sous forme de dict
                item_to_add = Produits(**adapter.asdict())
                session.add(item_to_add)
                session.commit()
            except IntegrityError:
                session.rollback()
                #spider.logger.error(f"Erreur d'intégrité pour l'item {item}")
        return item
    
class CategoriePipeline:
    def __init__(self):
        """_summary_ initialisation de a variable pour verifier les doublons
        """
        self.enregistre2 = set()

    def process_item(self, item, spider):
        """_summary_

        Args:
            item (_type_): _description_
            spider (_type_): _description_

        Raises:
            DropItem: _description_ en cas de duplication on supprime l'item

        Returns:
            _type_: _description_ retourne l'item
        """
        adapter = ItemAdapter(item)

        if adapter["id_categorie"] in self.enregistre2:
            raise DropItem(f"Duplication trouvé {item!r}")
        else:
            self.enregistre2.add(adapter["id_categorie"])
        
        #transfo id categorie
        categorie_string=adapter.get('id_categorie')
        categorie_split = categorie_string.split('-')
        adapter['id_categorie']=categorie_split[1]

        #transfo id cat parent
        cat_parent_string=adapter.get('id_cat_parent')
        if cat_parent_string:
            cat_parent_split = cat_parent_string.split('-')
            adapter['id_cat_parent']=cat_parent_split[1]
        else :
            adapter['id_cat_parent']=None

        return item
    
class CategoryToDbPipeline:

    def __init__(self, engine):
        """_summary_ permet de créer la connexion engine via SQLmodel

        Args:
            engine (_type_): _description_
        """
        self.engine = engine


    @classmethod
    def from_crawler(cls, crawler):
        """_summary_ Méthode pour relier 

        Args:
            crawler (_type_): _description_

        Raises:
            ValueError: _description_

        Returns:
            _type_: _description_ un engine fonctionnel
        """
        db_url = crawler.settings.get("DATABASE_URL")
        if not db_url:
            raise ValueError("DATABASE_URL doit être défini dans les paramètres Scrapy")
        engine = create_engine(db_url)
        return cls(engine)


    def process_item(self, item, spider):
        """_summary_ permet d'ajouter l'item dans la base de données

        Args:
            item (_type_): _description_ item de Produits 
            spider (_type_): _description_ spider produit

        Returns:
            _type_: _description_ retourne l'item
        """
        adapter = ItemAdapter(item)
        with Session(self.engine) as session:
            try:
                item_to_add = Categories(**adapter.asdict())
                session.add(item_to_add)
                session.commit()
            except IntegrityError:
                session.rollback()
        return item
    