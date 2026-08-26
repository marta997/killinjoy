"use client"

const AddButton = () => {
  const onClick = () => {
    console.log("add button click")
  }
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-700 text-md font-bold text-white transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
    >
      +
    </button>
  )
}

export default AddButton
