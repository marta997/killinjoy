import { useEffect, useState } from "react"
import { textaco } from "../lib/data"

import type TCategory from "~/types/Category"
import type TArticle from "~/types/Article"
import Article from "./Article"


const Articles = () => {
  const [articles, setArticles] = useState<TArticle[]>([])
  const [categories, setCategories] = useState<TCategory[]>([])
  const [loading, setLoading] = useState(true)

  const fetchArticles = async () => {
    const response = await fetch("http://localhost:8000/api/article")
    const articles: TArticle[] = await response.json()
    setArticles(articles)
  }

  const fetchCategories = async () => {
    const response = await fetch("http://localhost:8000/api/category")
    const categories: TCategory[] = await response.json()
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
      let category = categories.find(cat => cat.id === article.category)
      return <Article
        key={index}
        article={article}
        category={category}
      />
    })
    }
  </div>
}
export default Articles