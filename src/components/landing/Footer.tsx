import React from 'react'
import Tetris from '../originkit/ui/pixel-tetris'
import Link from 'next/link'
import { Button } from '../ui/button'

const Footer = () => {
  return (
    <section className='w-full h-full bg-neutral-900 relative space-y-10 p-20'>
      <div className="space-y-3">
        <h1 className='text-5xl font-semibold font-[figtree]'>Want to Connect?</h1>
        <p className='text-muted-foreground'>Reach out to me for collaborations, Inquiries, or just to say hello on <Link href="/" className='text-white underline'>LinkedIn</Link> or at <Link href="/" className='text-white underline'>devsharma2057@gmail.com</Link></p>
        <Button>Let's Chat</Button>
      </div>
      <div className="w-full h-60">
        <Tetris />
      </div>
      <div className="flex items-center justify-between">
        <div className="">
          <p>Created with ❤️ by <span className='font-[Diphylleia]'>Dev</span></p>
        </div>
        <div className="flex gap-4">
          <p>© {new Date().getFullYear()}. All rights reserved</p>
        </div>
      </div>
    </section>
  )
}

export default Footer