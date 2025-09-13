import type { DashboardOverviewCardInterface } from "@/interfaces/DashboardOverviewCardInterface"

function DashboardOverviewCard({
  title,
  children,
  noContent,
}: DashboardOverviewCardInterface) {
  return (
    <div className="rounded-2xl p-4 shadow-md/30">
      {title && <h2 className="text-subscription-card-title">{title}</h2>}
      {!noContent && <span className="text-value-size font-bold">$245.90</span>}
      {children}
    </div>
  )
}

export default DashboardOverviewCard
