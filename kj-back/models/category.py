class Category:

    def __init__(self):
        self.id = None
        self.name = None
        self.color = None

    def parse(self):
        return {
            "id": self.id,
            "name": self.name,
            "color": self.color,
        }
