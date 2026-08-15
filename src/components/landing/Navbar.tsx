import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'

const navLinks = [
    {label: "Home", href: "/", id: 1},
    {label: "Work", href: "/", id: 2},
    {label: "Contact", href: "/", id: 3},
]

const Navbar = () => {
  return (
    <header className='w-full px-5 absolute rop-0 left-0 right-0 pt-10 z-2'>
        <nav className='w-full flex items-center px-10 justify-between'>
            <Link href="/">
                <Image src="/logo.svg" width={25} height={25} alt='logo' className='w-auto h-auto' />
            </Link>

            <div className="space-x-3 text-sm bg-white/5 rounded-md  backdrop-blur-md px-2 pl-4 py-3">
                {navLinks.map((item) => {
                    return <Link href={item.href} key={item.id} className='hover:text-muted-foreground transition-colors duration-300'>
                        {item.label}
                    </Link>
                })}

                <Button>Resume</Button>
            </div>
        </nav>
    </header>
  )
}

export default Navbar