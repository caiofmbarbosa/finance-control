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
        lazy: () =>
          import(
            /* webpackChunkName: "Subscriptions" */ "@/pages/subscriptions/Subscriptions"
          ).then((module) => ({ Component: module.default })),
      },
      {
        path: "manage-subscription",
        lazy: () =>
          import(
            /* webpackChunkName: "ManageSubscription" */ "@/pages/subscriptions/SubscriptionManager"
          ).then((module) => ({ Component: module.default })),
      },
      {
        path: "settings",
        lazy: () =>
          import(/* webpackChunkName: "Settings" */ "@/pages/settings").then(
            (module) => ({ Component: module.default }),
          ),
      },
    ],
  },
  {
    path: "/login",
    lazy: () =>
      import(/* webpackChunkName: "Login" */ "@/pages/security/Login").then(
        (module) => ({ Component: module.default }),
      ),
  },
])

export default router
