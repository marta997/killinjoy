class Article:

    def __init__(self):
        self.id = None
        self.title = None
        self.body = None
        self.category = None

    def parse(self):
        return {
            "id": self.id,
            "title": self.title,
            "body": self.body,
            "category": self.category,
        }
