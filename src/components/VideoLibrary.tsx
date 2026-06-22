import "../styles/videoLibrary.css"

const videos = [

  {
    id: "dVw07IDIiQY",
    title: "REVISTA MASTER OFICIAL"
  },

  {
    id: "cLn-732G2NM",
    title: "TV CÂMARA CUBATÃO"
  },

  {
    id: "svK7LnpmOnY",
    title: "PALESTRA PROJETO SABEDORIA"
  },

  {
    id: "yzUfkGJjFU4",
    title: "DEMONSTRAÇÃO DE KARATE NA ALESP"
  },

  {
    id: "wAlmzkxAN9o",
    title: "JUBILEU DE OURO SHINSHUKAN"
  }

]

export default function VideoLibrary(){

  const handleOpen = (id: string) => {

    window.open(
      `https://www.youtube.com/watch?v=${id}`,
      "_blank"
    )

  }

  const mainVideo = videos[0]

  const sideVideos = videos.slice(1)

  return(

    <section
      id="video"
      className="video-library"
    >

      <div className="video-header">

        <span className="video-label">
          ACERVO AUDIOVISUAL
        </span>

        <h2 className="video-title">
          Vídeos e Entrevistas
        </h2>

        <p className="video-subtitle">
          Demonstrações, entrevistas, palestras e registros da trajetória do Sensei Rogério Wong.
        </p>

      </div>

      <div className="video-layout">

        <div
          className="video-main"
          onClick={() => handleOpen(mainVideo.id)}
        >

          <div className="video-main-thumb">

            <img
              src={`https://img.youtube.com/vi/${mainVideo.id}/maxresdefault.jpg`}
              alt={mainVideo.title}
            />

            <div className="play-icon">
              ▶
            </div>

          </div>

          <div className="video-info">

            <p>
              {mainVideo.title}
            </p>

          </div>

        </div>

        <div className="video-side">

          {sideVideos.map((video, index) => (

            <div
              key={index}
              className="video-item"
              onClick={() => handleOpen(video.id)}
            >

              <div className="video-thumb">

                <img
                  src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                  alt={video.title}
                />

                <div className="play-icon-small">
                  ▶
                </div>

              </div>

              <div className="video-item-info">

                <p>
                  {video.title}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

      <div className="youtube-footer">

        <button
          className="youtube-btn"
          onClick={() =>
            window.open(
              "https://www.youtube.com/@WongKarateKyokai-oficial/videos",
              "_blank"
            )
          }
        >
          VISITAR CANAL NO YOUTUBE
        </button>

      </div>

    </section>

  )

}