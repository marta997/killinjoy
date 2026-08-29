import Category from "./Category"

import type TArticle from "~/types/Article"
import type TCategory from "~/types/Category"

import { textaco } from "../lib/data"

type TArticleProps = {
    article: TArticle
    category?: TCategory
}

const Article = ({ article, category }: TArticleProps) => {


    return <div className="m-8">
        <div className="m-2 max-w-120 border-2 border-solid grid grid-cols-8 gap-4">
            <div className="p-2 col-span-7">
                {article.title}
            </div>
            {category && <Category category={category} />}
        </div>
        <div className="m-2 p-2 max-w-120 border-2 border-solid">
            {article.body} {textaco}
        </div>
    </div>
}

export default Article