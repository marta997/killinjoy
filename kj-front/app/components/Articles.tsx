import { useEffect, useState } from "react"
import { textaco } from "../lib/data"

type Category = {
  id: string
  name: string
  color: string
}

type Article = {
  id: string
  title: string
  body: string
  category: Category
}

const Articles = () => {
  const [articles, setArticles] = useState<Article[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)

  const fetchArticles = async () => {
    const response = await fetch("http://localhost:8000/api/article")
    const articles: Article[] = await response.json()
    setArticles(articles)
  }

  const fetchCategories = async () => {
    const response = await fetch("http://localhost:8000/api/category")
    const categories: Category[] = await response.json()
    setCategories(categories)
  }


  useEffect(() => {
    const fetchData = async () => {
      try {
        await Promise.all([
          fetchArticles(),
          fetchCategories()
        ])
      } catch (error) {
        console.error("Oops! Something went wrong...", error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return loading ? "Loading..." : <div>
    {articles.map((article, index) => {
      let category = categories.find(cat => cat.id === article.category.id)
      return <div key={index} className="m-8">
        <div className="m-2 max-w-120 border-2 border-solid grid grid-cols-8 gap-4">
          <div className="p-2 col-span-7">
            {article.title}
          </div>
          <div className="m-2 col-span-1 border-1 border-solid rounded-xl"
            style={{ backgroundColor: category && category.color || "white" }}
          />
        </div>
        <div className="m-2 p-2 max-w-120 border-2 border-solid">
          {article.body} {textaco}
        </div>
      </div>
    })
    }
  </div>
}
export default Articles