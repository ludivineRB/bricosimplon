from sqlmodel import SQLModel, create_engine
import model as model

#creation of the Engine
sqlite_file_name = "scrapping.db"
sqlite_url=f"sqlite:///{sqlite_file_name}"

engine = create_engine(sqlite_url, echo=True)

if __name__ == "__main__":
    SQLModel.metadata.create_all(engine)