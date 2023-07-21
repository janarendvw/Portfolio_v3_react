import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './components/ui/NavBar'
import Star from './components/icons/Star'
import ContactButton from './components/ui/ContactButton'
type Props = {}

function App({}: Props) {
  useEffect(() => {
    const mouse = { x: 0, y: 0 }
    const cursor = document.querySelector('.cursor')
    const follower = document.querySelector('.follower')
     
    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    })
    window.addEventListener('mousedown', () => {
      cursor.classList.add('is-down')
      follower.classList.add('is-down')
    })
    window.addEventListener('mouseup', () => {
      cursor.classList.remove('is-down')
      follower.classList.remove('is-down')
    })

    const position = { x: 0, y: 0 }
    const speed = 0.1
    const animate = function () {
      position.x += (mouse.x - position.x) * speed
      position.y += (mouse.y - position.y) * speed
      cursor.style.transform = `translate(${mouse.x - cursor?.clientWidth / 2}px, ${mouse.y - cursor?.clientHeight / 2 + scrollY}px)`
      follower.style.transform = `translate(${position.x - follower?.clientWidth / 2}px, ${position.y - follower?.clientHeight / 2 + scrollY}px)`
      requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener('mousemove', (e) => {
        mouse.x = e.clientX
        mouse.y = e.clientY
      })
    }
  }, [])

    return (
    <>
    <div className="cursor absolute z-50 w-4 h-4 rounded-full bg-accent pointer-events-none"></div>
    <div className="follower absolute z-50 w-4 h-4 rounded-full border-accent/50 border pointer-events-none"></div>
    <Star />
    <ContactButton />
    <NavBar />
    <Outlet /></>
  )
}

export default App