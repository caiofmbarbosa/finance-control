import type { DashboardSubscriptionCardInterface } from "@/interfaces/DashboardOverviewCardInterface copy"
import { useEffect, useState } from "react"

const initialValues = {
  title: "",
  price: 0,
  plan: "",
}

// TODO implement the data fetching and display real data
// TODO add return interface for fetchSubscription function
function DashboardSubscriptionCard({
  fetchSubscription,
}: DashboardSubscriptionCardInterface) {
  const [subscriptionData, setSubscriptionData] = useState(initialValues)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    let isSubscribed = true
    const fetchData = async () => {
      setIsLoading(true)

      // TODO replace with real fetching logic
      try {
        const data = await fetchSubscription()

        if (isSubscribed) {
          // EMPTY FOR NOW - TO BE IMPLEMENTED
        }
      } catch (error) {
        console.error("Error fetching subscription data:", error)
      } finally {
        isSubscribed = false
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="rounded-2xl p-4 shadow-md/30">
      <h2 className="text-subscription-dashboard-card-title">
        {subscriptionData?.title || "N/A"}
      </h2>
      <span className="text-subscription-dashboard-value-card font-bold">
        {subscriptionData?.price || "$0.00"}/{subscriptionData?.plan || "month"}
      </span>
    </div>
  )
}

export default DashboardSubscriptionCard
