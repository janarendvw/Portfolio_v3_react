import { useState } from 'react'

type Props = {}

function ContactModal({}: Props) {
    const [open, setOpen] = useState(false)
    
  return (
    <div className={`${open === true ? 'block' : 'hidden'} fixed z-40 w-full h-full bg-background/75`}>
      <div className={`${open === true ? 'block' : 'hidden'} overflow-hidden fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full z-40 max-w-4xl bg-white text-black h-full max-h-[600px] shadow-2xl grid grid-cols-2`}>
          <div className="overflow-hidden rounded-none"><img src='/projects/shadow_panes_2.png' alt='contact' className='col-span-1 w-full h-full blur-3xl scale-150' /></div>
          <div className='p-8 relative'>
          <button className='absolute top-2 right-2 text-2xl' onClick={() => setOpen(false)}><span className='material-symbols-rounded'>close</span></button>
          <h1 className='text-3xl px-3 font-bold'>Contact</h1>
          <form action="" className='px-3 py-6 mt-8 border-black/5'>
              <label htmlFor="name" className='block mb-1 text-xs w-fit'>Name</label>
              <input type="text" name="name" id="name" placeholder='Please enter your name...' className='rounded-md w-full p-2 bg-gray-400/5 focus:border-accent outline-none duration-200 text-sm' />
              <label htmlFor="email" className='block mt-4 mb-1 text-xs w-fit'>Email</label>
              <input type="email" name="email" id="email" placeholder='Please enter your email...' className='rounded-md w-full p-2 bg-gray-400/5 focus:border-accent outline-none duration-200 text-sm' />
              <label htmlFor="phone" className='block mt-4 mb-1 text-xs w-fit'>Phone</label>
              <input type="tel" name="phone" value={'+31 '} id="phone" className='rounded-md w-full p-2 bg-gray-400/5 focus:border-accent outline-none duration-200 text-sm' />
              <label htmlFor="message" className='block mt-4 mb-1 text-xs w-fit'>Message</label>
              <textarea name="message" id="message" placeholder='Please leave a message...' className='rounded-md w-full p-2 bg-gray-400/5 focus:border-accent outline-none duration-200 text-sm' />
              <button className='border-accent border text-accent text-base uppercase hover:bg-accent hover:text-background w-full py-2 mt-4'>Send</button>
          </form>
          </div>
      </div>
    </div>
  )
}

export default ContactModal