import SettingsCard from "@/pages/settings/components/SettingsCard"
import { IoSettings } from "react-icons/io5"
import { MdSms } from "react-icons/md"
import { FaUser, FaKey, FaEnvelope } from "react-icons/fa"

function Settings() {
  const accountSettings = [
    {
      label: "Update Profile",
      icon: <FaUser />,
      onClick: () => {},
    },
    {
      label: "Change Password",
      icon: <FaKey />,
      onClick: () => {},
    },
  ]

  const notificationSettings = [
    {
      label: "Email alerts",
      icon: <FaEnvelope />,
      onClick: () => {},
    },
    {
      label: "SMS Notifications",
      icon: <MdSms />,
      onClick: () => {},
    },
  ]

  return (
    <main className="min-h-screen p-4">
      <span className="text-title flex items-center gap-2">
        <IoSettings /> Settings
      </span>
      <section className="mt-4 grid grid-cols-3 gap-4">
        <SettingsCard title="Account Management" settings={accountSettings} />
        <SettingsCard
          title="Notification Preferences"
          settings={notificationSettings}
        />
      </section>
    </main>
  )
}

export default Settings
