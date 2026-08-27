from schemas.article import Article

data: list[Article] = [
    Article(
        title="Happy",
        body="This is a happy post",
        category=1,
    ),
    Article(
        title="Aaaangerr",
        body="THIS IS AN ANGRY POST",
        category=2,
    ),
    Article(
        title="Oh nooo :(",
        body="This is a sad post",
        category=3,
    ),
]

async def get_articles() -> list[Article]:
    result = data
    return result
