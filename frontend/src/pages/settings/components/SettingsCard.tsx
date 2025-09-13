import type { SettingsCardInterface } from "@/interfaces/SettingsCardInterface"

function SettingsCard({
  title,
  settings,
  disabled = false,
}: SettingsCardInterface) {
  return (
    <div className="bg-card-bg rounded-lg p-4 shadow-md">
      <span className="text-title">{title || "Card Title..."}</span>
      <div className="mt-2">
        {settings.map((setting, index) => (
          <button
            key={index}
            type="button"
            onClick={setting.onClick}
            disabled={disabled}
            className={`flex w-full items-center gap-2 transition-transform hover:scale-105 ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"} rounded-md p-2 text-left transition-colors duration-200`}
          >
            {setting.icon}
            {setting.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default SettingsCard
