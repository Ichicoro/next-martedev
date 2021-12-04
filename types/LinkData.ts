import { ReactNode } from "react"

export type LinkData = {
  text: string | ReactNode
  link: string
  internal?: boolean
}