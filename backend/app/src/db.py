from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
import psycopg2

engine = create_engine('postgresql://postgres:postgres@localhost:5432/cvwebsite')
Session = sessionmaker(bind=engine)
session = Session()
conn = psycopg2.connect('dbname=cvwebsite user=postgres')
cur = conn.cursor()


class Database:
    def data_query():
        cur.execute("""SELECT *
                        FROM skills;
                    """)
        data = cur.fetchall()
        print("Data fetched successfully!")
        return data