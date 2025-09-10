import { createBrowserRouter } from "react-router-dom"
import SecurityLayout from "@/pages/SecurityLayout"

const router = createBrowserRouter([
    {
        path: "/",
        element: <SecurityLayout />,
    }
])

export default router
