import { ReactNode } from "react"

interface Props {
    children: ReactNode
} 


const SanityLayout = ({children} : Props) => {
  return (
    <div>{children}</div>
  )
}

export default SanityLayout