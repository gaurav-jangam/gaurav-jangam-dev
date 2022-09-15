import React from "react"
import Header from "./component/Head/Header"
import Features from "./component/Features/Features"
import Home from "./component/Hero/Home"
import Portfolio from "./component/Portfolio/Portfolio"
import Resume from "./component/Resume/Resume"
import Testimonial from "./component/Testimonial/Testimonial"
import Contact from "./component/Contact/Contact"
import Footer from "./component/Footer"
import "./App.css"

function App() {
  return (
    <>
      <Header />
      <Home />
      <Features />
      <Resume />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  )
}

export default App