
const Text = (props) => {
    const { text } = props
    return <div className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)] max-w-lg">
        {text}
    </div>

}

export default Text