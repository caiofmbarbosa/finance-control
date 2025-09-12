interface CustomButtonInterface {
  onClick: () => void
  content?: string
  children?: React.ReactNode
  customClass?: string
  noHover?: boolean
}

export type { CustomButtonInterface }
