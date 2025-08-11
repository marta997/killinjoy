-- Up
CREATE TABLE Category (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    color TEXT
);

CREATE TABLE Article (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    body TEXT,
    category INTEGER REFERENCES Category(id) 
);

INSERT INTO Category (name, color) values ('Happy', '#F1C747');
INSERT INTO Category (name, color) values ('Angry', '#BA2121');
INSERT INTO Category (name, color) values ('Sad', '#4952A9');

INSERT INTO Article (title, body, category) values ('Happy', 'This is a happy post', 1);
INSERT INTO Article (title, body, category) values ('Aaaangerr', 'THIS IS AN ANGRY POST', 2);
INSERT INTO Article (title, body, category) values ('Oh nooo :(', 'This is a sad post', 3);

-- Down
DROP TABLE Category;
DROP TABLE Article;