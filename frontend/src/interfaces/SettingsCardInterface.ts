interface SettingsObject {
  label: string
  icon?: React.ReactNode
  onClick: () => void
}

interface SettingsCardInterface {
  title: string
  settings: SettingsObject[]
  disabled?: boolean
}

export type { SettingsCardInterface }
