from schemas.category import Category

data: list[Category] = [
    Category(
        id=1,
        name="Happy",
        color="#F1C747",
    ),
    Category(
        id=2,
        name="Aaaangerr",
        color="#BA2121",
    ),
    Category(
        id=3,
        name="Oh nooo :(",
        color="#4952A9",
    ),
]


async def get_categories() -> list[Category]:
    result = data
    return result
