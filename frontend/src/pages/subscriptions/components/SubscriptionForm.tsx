import type {
  SubscriptionFormData,
  SubscriptionFormInterface,
} from "@/interfaces/SubscriptionFormInterface"
import CustomButton from "../../../components/CustomButton"
import { useEffect, useState } from "react"
import * as yup from "yup"
import utils from "@/utils/utils"

const COMMON_DIV_CLASS = "flex flex-col gap-2"
const COMMON_INPUT_CLASS =
  "rounded-2xl p-2 ring-1 ring-input-stroke outline-none placeholder:text-input-placeholder"

const initialValues: SubscriptionFormData = {
  subscriptionName: "",
  subscriptionCost: "",
  subscriptionDate: "",
  subscriptionPaymentMethod: "",
}

const validationSchema = yup.object().shape({
  subscriptionName: yup.string().required("Subscription name is required"),
  subscriptionCost: yup
    .string()
    .test("is-positive", "Cost must be positive", (value) => {
      if (!value) return false

      const num = parseFloat(value)
      return !isNaN(num) && num > 0
    })
    .required("Cost is required"),
  subscriptionDate: yup
    .string()
    .test("is-valid-date", "Invalid date", (value) => {
      if (!value) return false
      const date = new Date(value)
      return !isNaN(date.getTime())
    })
    .required("Renewal date is required"),
  subscriptionPaymentMethod: yup
    .string()
    .required("Payment method is required"),
})

// TODO extract input to separate component
function SubscriptionForm({ title }: SubscriptionFormInterface) {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState<SubscriptionFormData>(initialValues)
  const [formErrors, setFormErrors] =
    useState<SubscriptionFormData>(initialValues)

  const handleSubmit = async () => {
    try {
      setIsLoading(true)

      await validationSchema.validate(formData, { abortEarly: false })
      setFormErrors(initialValues)

      const mappedFormData = Object.fromEntries(
        Object.entries(formData).map(([key, value]) => [
          key,
          key === "subscriptionName" || key === "subscriptionPaymentMethod"
            ? utils.capitalize(value)
            : key === "subscriptionCost"
              ? utils.normalizeCost(value)
              : value,
        ]),
      ) as SubscriptionFormData

      console.log("Mapped form data:", mappedFormData)
    } catch (err) {
      const newErrors: SubscriptionFormData = { ...initialValues }
      for (const validationError of (err as yup.ValidationError).inner) {
        if (validationError.path) {
          newErrors[validationError.path as keyof SubscriptionFormData] =
            validationError.message || ""
        }
      }

      setFormErrors(newErrors)
    } finally {
      setIsLoading(false)
    }
  }

  // TODO remove this useEffect when implement real form submission
  useEffect(() => {
    console.log("Form errors updated:", formErrors)
  }, [formErrors])

  return (
    <form className="flex w-2xl flex-col rounded-2xl p-4 shadow-md/30">
      <span className="text-title w-full border-b font-bold">
        {title || "Add Subscription"}
      </span>

      <div className="my-6 grid grid-cols-2 gap-6">
        <div className={COMMON_DIV_CLASS}>
          <label htmlFor="subscriptionName" className="text-input-label">
            Subscription Name
          </label>
          <input
            type="text"
            id="subscriptionName"
            name="subscriptionName"
            placeholder="Enter subscription name"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFormData({
                ...formData,
                [e.target.name]: e.target.value,
              })
            }
            value={formData.subscriptionName}
            className={COMMON_INPUT_CLASS}
          />
        </div>
        <div className={COMMON_DIV_CLASS}>
          <label htmlFor="subscriptionCost" className="text-input-label">
            Cost
          </label>
          <input
            type="number"
            id="subscriptionCost"
            name="subscriptionCost"
            step="10"
            placeholder="$15.99..."
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFormData({
                ...formData,
                [e.target.name]: e.target.value,
              })
            }
            value={formData.subscriptionCost}
            className={COMMON_INPUT_CLASS}
          />
        </div>
        <div className={COMMON_DIV_CLASS}>
          <label htmlFor="subscriptionDate" className="text-input-label">
            Renewal Date
          </label>
          <input
            type="date"
            id="subscriptionDate"
            name="subscriptionDate"
            placeholder="Select renewal date"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFormData({
                ...formData,
                [e.target.name]: e.target.value,
              })
            }
            value={formData.subscriptionDate}
            className={COMMON_INPUT_CLASS}
          />
        </div>
        <div className={COMMON_DIV_CLASS}>
          <label
            htmlFor="subscriptionPaymentMethod"
            className="text-input-label"
          >
            Payment Method
          </label>
          <input
            id="subscriptionPaymentMethod"
            name="subscriptionPaymentMethod"
            type="text"
            placeholder="Enter payment method"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFormData({
                ...formData,
                [e.target.name]: e.target.value,
              })
            }
            value={formData.subscriptionPaymentMethod}
            className={COMMON_INPUT_CLASS}
          />
        </div>
      </div>

      <div className="flex items-center justify-end border-t pt-4">
        <CustomButton onClick={handleSubmit} disabled={isLoading}>
          Save Changes
        </CustomButton>
      </div>
    </form>
  )
}

export default SubscriptionForm
