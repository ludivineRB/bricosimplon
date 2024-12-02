from sqlmodel import SQLModel, Field, Relationship 
#from datetime import datetime, date
from typing import Optional, List

class Categories(SQLModel, table=True):
    categorie: str = Field(nullable=False)
    id_categorie : str = Field(default=None, primary_key=True, nullable=False)
    lien_categorie : str = Field(default=None, nullable=False)
    type : str = Field(default=None, nullable=False)
    id_cat_parent : str = Field(nullable=True)

    produits: List["Produits"] = Relationship(back_populates="produits.categorie")

class Produits(SQLModel, table=True):
    nom : str = Field(nullable=False)
    prix : str = Field(default=None, nullable=False)
    remise_pourcentage : Optional[str] = Field(default='N/A', nullable=True)
    code : str = Field(default=None, nullable=False)
    EAN_13 : str = Field(default=None, primary_key=True, nullable=False)
    reference_fabricant : str = Field(default=None, nullable=False)
    description : str = Field(default=None, nullable=False)
    categorie : str = Field(default=None, foreign_key="categories.categorie")
    url_produit : str = Field(default=None, nullable=False)
    marque : str = Field(default=None, nullable=False)

    categorie_objet: Optional[Categories] = Relationship(back_populates="produits")
    