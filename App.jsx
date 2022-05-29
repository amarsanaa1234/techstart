import React from "react";
import Header from './../src/components/header/Header'
import About from './../src/components/about/About'
import Experience from './../src/components/experience/Experience'
import Box from './../src/components/box/Box'
import Swiper from './../src/components/swiper/Swiper1'
import Footer from '/home/rinchindugar/Documents/html/techstart_web/tutorial/src/components/footer/Footer'


const App = () => {
  return (
    <div>
      <div>
        <Header />
        <About />
        <Experience />
        <Box />
        <Swiper />
        <Footer />
      </div>
    </div>
  )
}


export default App