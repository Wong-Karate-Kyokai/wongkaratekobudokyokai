import { Link } from "react-router-dom"

import { news } from "../data/newsData"

import "../styles/homeNews.css"

export default function HomeNews(){

  const featured = news[0]

  const secondary = news.slice(1, 6)

  return(

    <section className="home-news">

      <div className="home-news-container">

        <div className="home-news-header">

          <span className="home-news-tag">
            NOTÍCIAS E EVENTOS
          </span>

          <h2 className="home-news-title">
            Últimas Notícias
          </h2>

        </div>

        <Link
          to={`/noticias/${featured.slug}`}
          className="home-featured-news"
        >

          <div className="home-featured-image">

            <img
              src={featured.cover}
              alt={featured.title}
            />

          </div>

          <div className="home-featured-content">

            <div className="home-featured-meta">

              <span>{featured.date}</span>

              <span className="dot"></span>

              <span>{featured.location}</span>

            </div>

            <h3>
              {featured.title}
            </h3>

            <p>
              {featured.subtitle}
            </p>

          </div>

        </Link>

        <div className="home-news-grid">

          {secondary.map((item, index) => (

            <Link
              key={index}
              to={`/noticias/${item.slug}`}
              className="home-news-card"
            >

              <img
                src={item.cover}
                alt={item.title}
              />

              <div className="home-news-card-content">

                <h4>
                  {item.title}
                </h4>

                <span>
                  {item.date}
                </span>

              </div>

            </Link>

          ))}

        </div>

        <div className="home-news-footer">

          <Link
            to="/noticias"
            className="home-news-button"
          >
            Ver todas as notícias
          </Link>

        </div>

      </div>

    </section>

  )

}