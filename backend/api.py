import json
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
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
    print("Data received successfully!")
    return json.dumps(data, default=json)


if __name__ == "__main__":
    uvicorn.run("api:app", host="localhost", port=5000, reload=True)