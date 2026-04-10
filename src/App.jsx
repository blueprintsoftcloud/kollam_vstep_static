import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import About from "./components/About"
import OurService from "./components/OurService"
import ContactUs from "./components/ContactUs"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* Adding IDs to sections for scrolling */}
      <div id="home"><HeroSection /></div>
      <div id="about"><About /></div>
      <div id="services"><OurService /></div>
      <div id="contact"><ContactUs /></div>
      <Footer />
    </div>
  )
}

export default App
