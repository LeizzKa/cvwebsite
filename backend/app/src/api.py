import json
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from db import Database
import uvicorn

origins = [
    "http://localhost:5173"
]
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_methods=['*'],
    allow_headers=['*']
)

@app.get("/data")
async def get_all():
    data = Database.data_query()
    print("Data received successfully!")
    return json.dumps(data, default=str)


if __name__ == "__main__":
    uvicorn.run("api:app", host="localhost", port=5000, reload=True)