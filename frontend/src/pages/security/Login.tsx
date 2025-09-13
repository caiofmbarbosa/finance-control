import { Navigate } from "react-router-dom"
import GoogleButton from "./components/GoogleButton"
import LoginForm from "./components/LoginForm"
import { useState } from "react"

function Login() {
  const [isRegistering, setIsRegistering] = useState(false)

  const handleSignUpClick = () => {
    setIsRegistering((prev) => !prev)
  }

  const user = false // TODO check if user is logged in

  return !user ? (
    <div className="flex min-h-screen items-center justify-center bg-login-bg">
      <div className="bg-login-card-bg rounded-2xl p-8 text-center">
        <h1 className="text-login-text text-title">
          Welcome to
          <br />
          MyApp
        </h1>

        <div className="my-4">
          <LoginForm
            isRegistering={isRegistering}
            setIsRegistering={setIsRegistering}
          />
        </div>

        <div className="flex flex-col items-center gap-2">
          <p
            className="text-login-text text-login-signup cursor-pointer transition-transform hover:scale-105"
            onClick={handleSignUpClick}
          >
            {isRegistering ? "Already have an account? Login here" : "Don't have an account? Register here"}
          </p>
          <GoogleButton />
        </div>
      </div>
    </div>
  ) : (
    <Navigate to="/" replace />
  )
}

export default Login
