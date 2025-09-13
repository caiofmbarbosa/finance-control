import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { Navigate, Outlet } from "react-router-dom"

function SecurityLayout() {
  const user = true // TODO implement user login state check

  return user ? (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  ) : (
    <Navigate to="/login" replace />
  )
}

export default SecurityLayout
