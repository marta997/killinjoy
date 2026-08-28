from schemas.category import Category

data: list[Category] = [
    Category(
        name="Happy",
        color="#F1C747",
    ),
    Category(
        name="Aaaangerr",
        color="#BA2121",
    ),
    Category(
        name="Oh nooo :(",
        color="#4952A9",
    ),
]


async def get_categories() -> list[Category]:
    result = data
    return result
