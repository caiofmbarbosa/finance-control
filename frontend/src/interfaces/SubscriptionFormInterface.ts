interface SubscriptionFormInterface {
    title?: string
}

interface SubscriptionFormData {
    subscriptionName: string
    subscriptionCost: string
    subscriptionDate: string
    subscriptionPaymentMethod: string
}

export type { SubscriptionFormInterface, SubscriptionFormData }