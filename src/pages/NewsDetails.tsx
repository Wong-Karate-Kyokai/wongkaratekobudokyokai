import { useParams } from "react-router-dom"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

import { news } from "../data/newsData"

import "../styles/newsDetails.css"

export default function NewsDetails(){

const { slug } = useParams()

const article = news.find(
item => item.slug === slug
)

if(!article){
return(

  <div>

    <Navbar/>

    <section className="details-page">

      <div className="details-container">

        <h1>
          Notícia não encontrada
        </h1>

      </div>

    </section>

    <Footer/>

  </div>

)

}

return(

<div>

  <Navbar/>

  <section className="details-page">

    <div className="details-container">

      <div className="details-header">

        <div className="details-meta">

          <span>{article.date}</span>

          <span className="dot"></span>

          <span>{article.location}</span>

        </div>

        <h1>
          {article.title}
        </h1>

        <p>
          {article.subtitle}
        </p>

      </div>

      <div className="details-cover">

        <img
          src={article.cover}
          alt={article.title}
        />

      </div>

      <div className="details-content">

        {article.content
          .split("\n")
          .filter(text => text.trim() !== "")
          .map((paragraph, index) => (

            <p key={index}>
              {paragraph}
            </p>

          ))}

        {article.gallery?.length > 0 && (

          <div className="details-gallery">

            {article.gallery.map((photo, index) => (

              <img
                key={index}
                src={photo}
                alt={`${article.title} ${index + 1}`}
              />

            ))}

          </div>

        )}

        {article.videos?.length > 0 && (

          <div className="details-videos">

            <h2 className="videos-title">
              Vídeos do Evento
            </h2>

            <div className="videos-grid">

              {article.videos.map((video, index) => (

                <a
                  key={index}
                  href={`https://www.youtube.com/watch?v=${video}`}
                  target="_blank"
                  rel="noreferrer"
                  className="video-card"
                >

                  <img
                    src={`https://img.youtube.com/vi/${video}/hqdefault.jpg`}
                    alt="Vídeo do YouTube"
                  />

                  <div className="play-button">
                    ▶
                  </div>

                </a>

              ))}

            </div>

          </div>

        )}

      </div>

    </div>

  </section>

  <Footer/>

</div>


)

}
