from pydantic import BaseModel


class Article(BaseModel):
    title: str
    body: str
    category: int


class ArticleResponse(BaseModel):
    data: list[Article]
