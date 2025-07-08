import { sections } from "@/lib/data";
import Image from "next/image";

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
          <Image
            aria-hidden
            src={element.icon}
            alt={element.text}
            width={16}
            height={16}
          />
          {element.text}
        </a>
      )}
    </div>
  )
}

export default Footer