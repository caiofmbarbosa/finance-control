import type { CustomButtonInterface } from "@/interfaces/CustomButtonInterface"

function CustomButton({
  content,
  children,
  customClass,
  noHover = false,
  onClick,
}: CustomButtonInterface) {
  return (
    <button
      className={`bg-button-bg text-button cursor-pointer rounded-3xl px-4 py-2 ${customClass} ${noHover ? "" : "transition-transform duration-200 ease-in-out hover:scale-110"}`}
      onClick={onClick}
      type="button"
    >
      {children ? children : content || "Button"}
    </button>
  )
}

export default CustomButton
