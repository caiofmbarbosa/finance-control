import { useState } from "react"
import { FaGoogle } from "react-icons/fa"

// TODO implement Google OAuth
function GoogleButton() {
  const [isDisabled, setIsDisabled] = useState(false) // TODO implement button disabled state

  return (
    <button
      className={`bg-google flex items-center gap-2 rounded-3xl px-4 py-2 text-black transition-transform duration-200 ease-in-out hover:scale-110 ${isDisabled ? "cursor-not-allowed opacity-50 transition-opacity" : "cursor-pointer"}`}
    >
      <FaGoogle />
      Google
    </button>
  )
}

export default GoogleButton
