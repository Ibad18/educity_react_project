import { useState } from "react"
import About from "./Components/About/About"
import Campus from "./Components/Capmus/Campus"
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer"
import Hero from "./Components/Hero/Hero"
import Navbar from "./Components/Navbar/Navbar"
import Programs from "./Components/Programs/Programs"
import Testimonials from "./Components/Testimonials/Testimonials"
import Title from "./Components/Title/Title"
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer"

function App() {
const [playState, setPlayState] = useState(false);
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle = "our program" title = "What We Offer" />
        <Programs />
        <About setPlayState = {setPlayState}/>
        <Title subTitle = "Gallery" title = "Campus Photos" />
        <Campus />
        <Title subTitle = "TESTIMONIALS" title = "What Students Says" />
        <Testimonials />
        <Title subTitle = "Contact us" title = "Get in touch" />
        <Contact />
        <Footer />
      </div>
      <VideoPlayer playState = {playState} setPlayState = {setPlayState} />
    </div>
  )
}

export default App
