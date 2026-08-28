from fastapi import FastAPI
from services.article import get_articles
from services.category import get_categories

app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/api/article")
async def article():
    data = await get_articles()
    return data


@app.get("/api/category")
async def category():
    data = await get_categories()
    return data
