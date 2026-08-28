from pydantic import BaseModel


class Category(BaseModel):
    name: str
    color: str


class CategoryResponse(BaseModel):
    data: list[Category]
