import CustomButton from "@/components/CustomButton"
import SubscriptionCard from "@/components/SubscriptionCard"

// TODO take mocked data out and implement fetching real data
function Subscriptions() {
  return (
    <main className="flex min-h-screen flex-col gap-8 p-4">
      <section className="grid grid-cols-3 gap-4">
        <SubscriptionCard title="Netflix" date="2023-10-15" cost="$15.99" />
        <SubscriptionCard title="Netflix" date="2023-10-15" cost="$15.99" />
        <SubscriptionCard title="Netflix" date="2023-10-15" cost="$15.99" />
        <SubscriptionCard title="Netflix" date="2023-10-15" cost="$15.99" />
        <SubscriptionCard title="Netflix" date="2023-10-15" cost="$15.99" />
      </section>

      <section className="grid w-full flex-1 flex-col">
        <CustomButton onClick={() => {}} customClass="h-full w-full hover:font-bold transition-all ease" noHover>
          Add New Subscription
        </CustomButton>
      </section>
    </main>
  )
}

export default Subscriptions
