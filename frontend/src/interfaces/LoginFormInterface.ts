import type { Dispatch, SetStateAction } from "react"

interface LoginFormInterface {
  isRegistering?: boolean
  setIsRegistering?: Dispatch<SetStateAction<boolean>>
}

export type { LoginFormInterface }
