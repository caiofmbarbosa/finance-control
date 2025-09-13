import CustomButton from "@/components/CustomButton"
import DashboardOverviewCard from "./components/DashboardOverviewCard"
import DashboardSubscriptionCard from "./components/DashboardSubscriptionCard"

function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start gap-8 p-4">
      <section className="grid w-full grid-cols-3 gap-4">
        <DashboardOverviewCard title="Monthly Expenses" />
        <DashboardOverviewCard noContent>
          <div>GRAPH</div>
        </DashboardOverviewCard>

        <div className="flex flex-col items-center justify-center gap-4">
          <CustomButton
            content="Add Subscription"
            onClick={() => {}}
            noHover
            customClass="w-full hover:font-bold"
          />
          <CustomButton
            content="Manage Subscription"
            onClick={() => {}}
            noHover
            customClass="w-full hover:font-bold"
          />
          <CustomButton
            content="Delete Subscription"
            onClick={() => {}}
            noHover
            customClass="w-full hover:font-bold"
          />
        </div>
      </section>

      <section className="grid w-full auto-rows-auto grid-cols-3 gap-4">
        <span className="text-title border-divider col-span-3 border-b font-bold">
          Subscriptions
        </span>

        <DashboardSubscriptionCard
          fetchSubscription={() =>
            Promise.resolve({
              title: "Basic Plan",
              price: 9.99,
              plan: "monthly",
            })
          }
        />
        <DashboardSubscriptionCard
          fetchSubscription={() =>
            Promise.resolve({
              title: "Basic Plan",
              price: 9.99,
              plan: "monthly",
            })
          }
        />
        <DashboardSubscriptionCard
          fetchSubscription={() =>
            Promise.resolve({
              title: "Basic Plan",
              price: 9.99,
              plan: "monthly",
            })
          }
        />
        <DashboardSubscriptionCard
          fetchSubscription={() =>
            Promise.resolve({
              title: "Basic Plan",
              price: 9.99,
              plan: "monthly",
            })
          }
        />
      </section>
    </main>
  )
}

export default Home
