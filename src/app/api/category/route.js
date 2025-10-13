const sqlite = require('sqlite');
const sqlite3 = require('sqlite3');

export async function GET() {
  const db = await sqlite.open({
    filename: './mydb.sqlite',
    driver: sqlite3.Database
  });
  const articles = await db.all('SELECT * FROM Category')
  return new Response(
    JSON.stringify(articles),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    })
}