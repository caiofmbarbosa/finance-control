import { TRASH_ICON_SIZE } from "@/consts/ParametricConsts"
import type { SubscriptionCardInterface } from "@/interfaces/SubscriptionCardInterface"
import { FaTrash } from "react-icons/fa"
import CustomButton from "../../../components/CustomButton"

// TODO take mocked data out and implements onClick functions
function SubscriptionCard({ title, date, cost }: SubscriptionCardInterface) {
  return (
    <div className="flex flex-col gap-2 rounded-2xl p-4 shadow-md/20">
      <div className="flex items-center justify-between border-b pb-2">
        <span className="text-subscription-card-title font-bold">{title}</span>
        <CustomButton content="Edit" onClick={() => {}} />
      </div>

      <div className="flex flex-col text-sm">
        <span>Renewal Date: {date || new Date().toLocaleDateString()}</span>
        <span>Cost: {cost || "$9.99"}/month</span>
      </div>

      <div className="mt-4 flex justify-end">
        <CustomButton
          onClick={() => {}}
          customClass="flex items-center gap-2 justify-center"
        >
          Delete <FaTrash size={TRASH_ICON_SIZE} />
        </CustomButton>
      </div>
    </div>
  )
}

export default SubscriptionCard
