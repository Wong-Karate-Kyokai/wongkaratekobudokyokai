import { Link } from "react-router-dom"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

import { news } from "../data/newsData"

import "../styles/news.css"

export default function News(){

  const featured = news?.[0]

  const secondary = news.slice(1)

  return(

    <div>

      <Navbar/>

      <section className="news-page">

        <div className="news-container">

          <div className="news-header">

            <span className="news-tag">
              PORTAL DE NOTÍCIAS
            </span>

            <h1 className="news-title">
              Notícias e Eventos
            </h1>

            <p className="news-description">
              Acompanhe seminários, cursos, graduações,
              torneios, homenagens e eventos relacionados
              ao Karate-Do e Kobu-Do Shinshukan.
            </p>

          </div>

          {featured && (

            <Link
              to={`/noticias/${featured.slug}`}
              className="featured-news"
            >

              <div className="featured-image">

                <img
                  src={featured.cover}
                  alt={featured.title}
                />

              </div>

              <div className="featured-content">

                <div className="featured-meta">

                  <span>{featured.date}</span>

                  <span className="dot"></span>

                  <span>{featured.location}</span>

                </div>

                <h2>
                  {featured.title}
                </h2>

                <p>
                  {featured.subtitle}
                </p>

              </div>

            </Link>

          )}

          <div className="news-grid">

            {secondary.map((item,index)=>(

              <Link
                key={index}
                to={`/noticias/${item.slug}`}
                className="news-card"
              >

                <div className="news-card-image">

                  <img
                    src={item.cover}
                    alt={item.title}
                  />

                </div>

                <div className="news-card-content">

                  <div className="news-meta">

                    <span>{item.date}</span>

                    <span className="dot"></span>

                    <span>{item.location}</span>

                  </div>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.subtitle}
                  </p>

                </div>

              </Link>

            ))}

          </div>

        </div>

      </section>

      <Footer/>

    </div>

  )

}