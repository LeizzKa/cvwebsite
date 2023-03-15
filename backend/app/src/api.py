from fastapi import FastAPI
from db import Database
import json
import uvicorn


app = FastAPI()


@app.get("/data")
async def get_all():
    data = Database.data_query()
    print("Data received successfully!")
    return json.dumps(data)


if __name__ == "__main__":
    uvicorn.run("api:app", host="localhost", port=5000, reload=True)