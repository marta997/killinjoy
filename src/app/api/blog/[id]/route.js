const sqlite = require('sqlite');
const sqlite3 = require('sqlite3');

export async function GET(request, { params }) {
  const { id } = await params

  const db = await sqlite.open({
    filename: './mydb.sqlite',
    driver: sqlite3.Database
  })
  const article = await db.get('SELECT * FROM Article WHERE id = ?', [id])

  return new Response(JSON.stringify(article), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  })
}