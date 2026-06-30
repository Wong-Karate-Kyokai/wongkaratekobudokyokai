import { useEffect } from "react"
import { useLocation } from "react-router-dom"

import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import HomeNews from "../components/HomeNews"
import About from "./About"
import VideoLibrary from "../components/VideoLibrary"
import HireSection from "../components/HireSection"
import Footer from "../components/Footer"

export default function Home(){

  const location = useLocation()

  useEffect(() => {

    if(location.state?.scrollTo){

      const element = document.getElementById(
        location.state.scrollTo
      )

      if(element){

        setTimeout(() => {

          element.scrollIntoView({
            behavior: "smooth"
          })

        }, 100)

      }

    }

  }, [location])

  return(

    <div id="top">

      <Navbar/>

      <Hero/>

      <About/>

      <HomeNews/>
      
      <VideoLibrary/>

      <HireSection/>

      <Footer/>

    </div>

  )

}