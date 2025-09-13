import type { CustomButtonInterface } from "@/interfaces/CustomButtonInterface"

function CustomButton({
  content,
  children,
  customClass,
  noHover = false,
  disabled = false,
  onClick,
}: CustomButtonInterface) {
  return (
    <button
      className={`bg-button-bg text-button rounded-3xl px-4 py-2 ${customClass} ${noHover ? "" : "transition-transform duration-200 ease-in-out hover:scale-110"} ${disabled ? "cursor-not-allowed opacity-50 transition-opacity" : "cursor-pointer"}`}
      onClick={onClick}
      disabled={disabled}
      type="button"
    >
      {children ? children : content || "Button"}
    </button>
  )
}

export default CustomButton
