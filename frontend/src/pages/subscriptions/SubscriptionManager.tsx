import SubscriptionForm from "@/components/SubscriptionForm"

function SubscriptionManager() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto flex w-full flex-col items-center justify-center p-4">
        <SubscriptionForm />
        <span className="text-policy mt-4">
          Please ensure all fields are filled out correctly. If you encounter
          any issues, please contact support.
        </span>
      </section>
    </main>
  )
}

export default SubscriptionManager
