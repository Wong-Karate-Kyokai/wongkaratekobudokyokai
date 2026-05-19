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
    title: "DEMONSTRAÇÃO DE KARATE NA ALESP 2019"
  },

  {
    id: "wAlmzkxAN9o",
    title: "JUBILEU DE OURO SHIN SHU KAN"
  },


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

    <section id="video" className="video-library">

      <div className="video-header">

        <h2 className="video-title">
          Vídeos do Sensei
        </h2>

        <p className="video-subtitle">
          Demonstrações, entrevistas, apresentações e conteúdos sobre Karate-Do tradicional.
        </p>

      </div>

      <div className="video-layout">

        <div
          className="video-main"
          onClick={() => handleOpen(mainVideo.id)}
        >

          <img
            src={`https://img.youtube.com/vi/${mainVideo.id}/maxresdefault.jpg`}
            alt={mainVideo.title}
          />

          <div className="video-overlay">

            <div className="video-info">
              <p>{mainVideo.title}</p>
            </div>

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

              </div>

              <div className="video-item-info">
                <p>{video.title}</p>
              </div>

            </div>

          ))}

        </div>

      </div>

      <button
        type="button"
        className="youtube-btn"
        onClick={() =>
          window.open(
            "https://www.youtube.com/@WongKarateKyokai-oficial/videos",
            "_blank"
          )
        }
      >
        Ver canal no YouTube
      </button>

    </section>

  )

}