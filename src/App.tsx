import { Outlet } from 'react-router-dom'
import NavBar from './components/ui/NavBar'
import Star from './components/icons/Star'
import ContactButton from './components/ui/ContactButton'

function App() {

    return (
    <>
    <Star />
    <ContactButton />
    <NavBar />
    <Outlet /></>
  )
}

export default App