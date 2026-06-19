import { Link } from "react-router-dom"

import { news } from "../data/newsData"

import "../styles/homeNews.css"

export default function HomeNews(){

  const featured = news[0]

  const secondary = news.slice(1,4)

  return(

    <section className="home-news">

      <div className="home-news-container">

        <div className="home-news-header">

          <div>
            <h2 className="home-news-title">
              Últimas Notícias
            </h2>

          </div>

          <Link
            to="/noticias"
            className="home-news-button"
          >
            Ver todas
          </Link>

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

              <div className="home-news-card-image">

                <img
                  src={item.cover}
                  alt={item.title}
                />

              </div>

              <div className="home-news-card-content">

                <div className="home-news-meta">

                  <span>{item.date}</span>

                  <span className="dot"></span>

                  <span>{item.location}</span>

                </div>

                <h4>
                  {item.title}
                </h4>

              </div>

            </Link>

          ))}

        </div>

      </div>

    </section>

  )

}