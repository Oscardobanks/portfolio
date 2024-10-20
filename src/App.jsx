
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import ScrollToTopButton from './components/ScrollToTopButton'
import Skills from './components/Skills'

function App() {

  return (
    <>
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
    <ScrollToTopButton />
    </>
  )
}

export default App
