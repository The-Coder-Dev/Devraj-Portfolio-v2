import Navbar from "@/components/landing/Navbar"
import { ReactNode } from "react"


interface Props {
    children: ReactNode
}


const LandingLayout = ({children} : Props) => {
    return (
        <main>
            <Navbar />
            <div
                className="
          fixed
          inset-0
          pointer-events-none
          opacity-[0.03]
          bg-[url('/noise.gif')]
          z-10"
            />
            {children}
        </main>
    )
}

export default LandingLayout