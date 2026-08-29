from pydantic import BaseModel


class Category(BaseModel):
    id: int
    name: str
    color: str


class CategoryResponse(BaseModel):
    data: list[Category]
