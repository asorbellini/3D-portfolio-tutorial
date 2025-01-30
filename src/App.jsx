import Hero from "./sections/Hero.jsx"
import Navbar from "./sections/Navbar.jsx"
import About from "./sections/About.jsx"
import Projects from "./sections/Projects.jsx"
import Clients from "./components/Clients.jsx"
import Contact from "./sections/Contact.jsx"
import Footer from "./sections/Footer.jsx"
import Experience from "./sections/Experience.jsx"

function App() {

  return (
    <main className='max-w-7xl mx-auto' id="home">
      <h1 className='text-2xl text-white' >
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <Clients />
          <Experience />
          <Contact />
          <Footer />
      </h1>
    </main>
  )
}

export default App
