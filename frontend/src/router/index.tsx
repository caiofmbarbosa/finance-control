import { createBrowserRouter } from "react-router-dom"
import SecurityLayout from "@/pages/SecurityLayout"

const router = createBrowserRouter([
    {
        path: "/",
        element: <SecurityLayout />,
        children: [
            {
                index: true,
                // lazy: () => import(/* webpackChunkName: "Home" */ "@/pages/Home").then(module => ({ Component: module.default }))
            },
            {
                path: "subscriptions",
                lazy: () => import(/* webpackChunkName: "Subscriptions" */ "@/pages/subscriptions/Subscriptions").then(module => ({ Component: module.default }))
            },
        ]
    }
])

export default router
