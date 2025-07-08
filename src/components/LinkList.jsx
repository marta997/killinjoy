
const LinkList = (props) => {
  const { items = [] } = props
  return <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
    {items.map((element, index) =>
      <li key={index} className="mb-2 tracking-[-.01em]">
        <a href={element.href}>
          {element.text}
        </a>
      </li>
    )}
  </ol>
}

export default LinkList