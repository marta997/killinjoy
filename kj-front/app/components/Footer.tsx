import { sections } from "../lib/data"

const Footer = () => {
  return (
    <div className="p-4 row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      {sections.map((element, index) =>
        <a
          key={index}
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href={element.href}
          rel="noopener noreferrer"
        >
          {element.text}
        </a>
      )}
    </div>
  )
}

export default Footer