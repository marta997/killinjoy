"use client";

const Button = (props) => {
  const { text, dark = false } = props
  const handleClick = () => {
    console.log("AAA")
  }
  return <button
    className={
      dark ?
        "rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
        :
        "rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
    }
    rel="noopener noreferrer"
    onClick={handleClick}
  >
    {text}
  </button>

}

export default Button