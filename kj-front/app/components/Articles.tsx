import { useEffect, useState } from "react"
import { textaco } from "../lib/data"

const Articles = () => {
  const [articles, setArticles] = useState([])
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchArticles = async () => {
    let response = await fetch("/api/blog")
    response = await response.json()
    setArticles(response)
  }

  const fetchCategories = async () => {
    let response = await fetch("/api/category")
    response = await response.json()
    setCategories(response)
  }

  useEffect(()=> {
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
  },[])

  return loading ? "Loading..." : <div>
    {articles.map((article, index) => {
      let category = categories.find(cat => cat.id === article.category)
      return <div key={index} className="m-8">
        <div className="m-2 max-w-120 border-2 border-solid grid grid-cols-8 gap-4">
          <div className="p-2 col-span-7">
            {article.title}
          </div>
          <div className="m-2 col-span-1 border-1 border-solid rounded-xl"
            style={{ backgroundColor: category.color }}
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