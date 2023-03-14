from fastapi import FastAPI
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
import psycopg2

app = FastAPI()
engine = create_engine('postgresql://postgres:postgres@localhost:5432/cvwebsite')
Session = sessionmaker(bind=engine)
session = Session()
conn = psycopg2.connect('dbname=cvwebsite user=postgres')
cur = conn.cursor()


@app.route("/data")
def data():
    return {
        "name": "Leevi Luukkonen",
        "birth_date": "06.10.2002",
        "skills": "Python, Flask, JavaScript, TypeScript",
        "experience": "PSIL"
        }

if __name__ == "__main__":
    app.run(debug=True)