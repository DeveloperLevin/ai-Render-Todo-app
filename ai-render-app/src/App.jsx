import './App.css'
import NavBar from './components/NavBar'
import AllTodos from './components/AllTodos'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <NavBar className="glass-container" />
      <AllTodos />
      <Footer />
    </>
  )
}


