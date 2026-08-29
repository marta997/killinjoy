import type TCategory from "~/types/Category"

type TCategoryProps = {
    category?: TCategory
}

const Category = ({ category }: TCategoryProps) => {
    return <div
        className="m-2 col-span-1 border-1 border-solid rounded-xl"
        style={{ backgroundColor: category?.color || "#000" }}
    />
}

export default Category