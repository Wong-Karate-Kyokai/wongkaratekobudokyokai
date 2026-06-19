import { useState, useEffect } from "react"
import "../styles/navbar.css"
import logo from "../assets/images/logo.jpg"
import { Link, useLocation } from "react-router-dom"
import { HashLink } from "react-router-hash-link"

export default function Navbar(){

  const [open, setOpen] = useState(false)

  const location = useLocation()

  useEffect(() => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })

  }, [location.pathname])

  useEffect(() => {

    const handleHashScroll = () => {

      const hash = window.location.hash

      if(hash){

        const element = document.querySelector(hash)

        if(element){

          setTimeout(() => {

            const yOffset = -100

            const y =
              element.getBoundingClientRect().top +
              window.pageYOffset +
              yOffset

            window.scrollTo({
              top: y,
              behavior: "smooth"
            })

          }, 100)

        }

      }

    }

    handleHashScroll()

    window.addEventListener("hashchange", handleHashScroll)

    return () => {
      window.removeEventListener("hashchange", handleHashScroll)
    }

  }, [])

  return(

    <nav className="navbar">

      <div className="navbar-container">

        <div className="logo">
          <img src={logo} alt="Wong Karate-Do" />
        </div>

        <ul className={`menu ${open ? "open" : ""}`}>

          <li>
            <HashLink smooth to="/#home" onClick={() => setOpen(false)}>
              HOME
            </HashLink>
          </li>

          <li>
            <HashLink smooth to="/#about" onClick={() => setOpen(false)}>
              O SENSEI
            </HashLink>
          </li>

          <li>
            <Link
              to="/noticias"
              onClick={() => setOpen(false)}
            >
              NOTÍCIAS
            </Link>
          </li>
          <li>
            <Link to="/galeria" onClick={() => setOpen(false)}>
              GALERIA
            </Link>
          </li>

          <li>
            <Link to="/karate" onClick={() => setOpen(false)}>
              O KARATE
            </Link>
          </li>

          <li>
            <HashLink smooth to="/#video" onClick={() => setOpen(false)}>
              VÍDEOS
            </HashLink>
          </li>


          <li>
            <HashLink smooth to="/#contato" onClick={() => setOpen(false)}>
              CONTATO
            </HashLink>
          </li>

        </ul>

        <div
          className={`hamburger ${open ? "active" : ""}`}
          onClick={() => setOpen(prev => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>

    </nav>

  )
}