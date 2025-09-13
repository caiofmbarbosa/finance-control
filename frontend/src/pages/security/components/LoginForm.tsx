import type { LoginFormInterface } from "@/interfaces/LoginFormInterface"
import { useState } from "react"

const COMMON_DIV_CLASS =
  "flex flex-col gap-1 text-left text-label text-label-size"
const COMMON_INPUT_CLASS =
  "w-full rounded-2xl p-2 text-input-text text-input-size placeholder:text-input-placeholder focus:outline-none ring-1 ring-input-login-stroke"

// TODO implement form validation and submission with yup
// TODO implement "forgot password" link
// TODO implement "show password" toggle
function LoginForm({
  isRegistering = false,
  setIsRegistering,
}: LoginFormInterface) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setIsRegistering?.(false)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className={COMMON_DIV_CLASS}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          className={COMMON_INPUT_CLASS}
          autoComplete="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      <div className={COMMON_DIV_CLASS}>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          className={COMMON_INPUT_CLASS}
          autoComplete={isRegistering ? "new-password" : "current-password"}
          placeholder="Enter your password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
      </div>
      {isRegistering && (
        <div className={COMMON_DIV_CLASS}>
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="password"
            id="confirm-password"
            className={COMMON_INPUT_CLASS}
            autoComplete="new-password"
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={(e) =>
              setFormData({ ...formData, confirmPassword: e.target.value })
            }
          />
        </div>
      )}
      <button
        disabled={!formData.email || !formData.password || isSubmitting}
        className={`bg-login-input-bg text-button-text w-full rounded-2xl py-1 ${!formData.email || !formData.password || isSubmitting ? "cursor-not-allowed opacity-50" : "ease cursor-pointer transition-all hover:font-bold"}`}
        type="submit"
      >
        {isRegistering ? "Register" : "Login"}
      </button>
    </form>
  )
}

export default LoginForm
