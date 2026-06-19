import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

import "../styles/gallery.css"

const photos = [

  {
    image: new URL("../assets/images/gallery/1.png", import.meta.url).href,
    title: "Meu Herói, meu Ídolo e  grande Pai",
    subtitle: "Wong Wing Sen (Em memória)"
  },

  {
    image: new URL("../assets/images/gallery/2.png", import.meta.url).href,
    title: "Meu respeito e reverência ao meu eterno Mestre e Mentor",
    subtitle: "Yoshihide Shinzato "
  },

  {
    image: new URL("../assets/images/gallery/3.png", import.meta.url).href,
    title: "Momento único, outorga de Hanshi - 10º Dan",
    subtitle: "Sesc/Santos 2001"
  },

  {
    image: new URL("../assets/images/gallery/4.png", import.meta.url).href,
    title: "Dezembro de 2007",
    subtitle: "Cotia/SP"
  },

  {
    image: new URL("../assets/images/gallery/5.png", import.meta.url).href,
    title: "Templo Kinkakuji",
    subtitle: "São Roque/SP"
  },

  {
    image: new URL("../assets/images/gallery/6.png", import.meta.url).href,
    title: "Jubileu de Prata Shinshukan",
    subtitle: "Sesc/Santos 1987"
  },

  {
    image: new URL("../assets/images/gallery/7.png", import.meta.url).href,
    title: "Mundialito Shinshukan",
    subtitle: "2000"
  },

  {
    image: new URL("../assets/images/gallery/8.png", import.meta.url).href,
    title: "Recebendo a faixa coral (7º dan) do meu mentor, Grão-mestre Yoshihide Shinzato",
    subtitle: "Agosto de 2004"
  },

  {
    image: new URL("../assets/images/gallery/9.png", import.meta.url).href,
    title: "Homenagem ao Mestre Yoshihide Shinzato com o KABUTO",
    subtitle: "Câmara municipal de São Vicente/SP, 2007"
  },

  {
    image: new URL("../assets/images/gallery/10.png", import.meta.url).href,
    title: "Homenagem dos alunos com o quadro KABUTO",
    subtitle: "KABUTO"
  },

  {
    image: new URL("../assets/images/gallery/11.png", import.meta.url).href,
    title: "Masahiro Shinzato",
    subtitle: "Okinawa Shorin-Ryu"
  },

  {
    image: new URL("../assets/images/gallery/12.png", import.meta.url).href,
    title: "Recebendo o 8º Dan das mãos do Mestre Masahiro Shinzato ",
    subtitle: "2015"
  },

  {
    image: new URL("../assets/images/gallery/13.png", import.meta.url).href,
    title: "Meirou: Alegria, Regozijo",
    subtitle: "Novembro de 2015"
  },

  {
    image: new URL("../assets/images/gallery/14.png", import.meta.url).href,
    title: "Graduação 8º Dan - Honbu Dojo",
    subtitle: "Santos-SP - 2015"
  },

  {
    image: new URL("../assets/images/gallery/15.png", import.meta.url).href,
    title: "Okinawa Karate Shorin Cup",
    subtitle: "Karate"
  },

  {
    image: new URL("../assets/images/gallery/16.png", import.meta.url).href,
    title: "Recebendo o título de Cidadão Uberabense",
    subtitle: "Uberaba/MG - 2010"
  },

  {
    image: new URL("../assets/images/gallery/17.png", import.meta.url).href,
    title: "Homenagem da Câmara Municipal de São Pedro da Aldeia",
    subtitle: "Rio de Janeiro - 2018"
  },

  {
    image: new URL("../assets/images/gallery/18.png", import.meta.url).href,
    title: "Homenagem da Câmara Municipal de Marília/SP",
    subtitle: "Vereador Elio Eiji Ajeka e Sensei Clebert Kato - 2024"
  },

  {
    image: new URL("../assets/images/gallery/19.png", import.meta.url).href,
    title: "Título de Doutor Honoris Causa",
    subtitle: "Erich Fromm University EUA"
  },

  {
    image: new URL("../assets/images/gallery/20.png", import.meta.url).href,
    title: "Katsuya Miyahira",
    subtitle: "Okinawa Shorin-Ryu Shidokan"
  },

  {
    image: new URL("../assets/images/gallery/21.png", import.meta.url).href,
    title: "Katsuya Miyahira",
    subtitle: "Okinawa Shorin-Ryu Shidokan"
  },

  {
    image: new URL("../assets/images/gallery/22.png", import.meta.url).href,
    title: "Katsuya Miyahira",
    subtitle: "Okinawa Shorin-Ryu Shidokan"
  },

  {
    image: new URL("../assets/images/gallery/23.png", import.meta.url).href,
    title: "Katsuya Miyahira",
    subtitle: "Okinawa Shorin-Ryu Shidokan"
  },

  {
    image: new URL("../assets/images/gallery/24.png", import.meta.url).href,
    title: "Maeshiro Morinobu",
    subtitle: "Okinawa Shorin-Ryu Karate-Do"
  },

  {
    image: new URL("../assets/images/gallery/25.png", import.meta.url).href,
    title: "Mundialito Shinshukan",
    subtitle: "Brasil - 2007"
  },

  {
    image: new URL("../assets/images/gallery/26.png", import.meta.url).href,
    title: "Diploma de 8°Dan das mãos do Mestre Maeshiro Morinobu",
    subtitle: "Mestre Maeshiro Morinobu"
  },

  {
    image: new URL("../assets/images/gallery/27.png", import.meta.url).href,
    title: "Gratidão ao Mestre Maeshiro Morinobu",
    subtitle: "Mestre Maeshiro Morinobu"
  },

  {
    image: new URL("../assets/images/gallery/28.png", import.meta.url).href,
    title: "Meiyu Takara",
    subtitle: "Okinawa Shorin-Ryu"
  },

  {
    image: new URL("../assets/images/gallery/29.png", import.meta.url).href,
    title: "Meiyu Takara",
    subtitle: "Okinawa Shorin-Ryu"
  },

  {
    image: new URL("../assets/images/gallery/30.png", import.meta.url).href,
    title: "Takeshi Miyagi",
    subtitle: "Okinawa Shorin-Ryu"
  },

  {
    image: new URL("../assets/images/gallery/31.png", import.meta.url).href,
    title: "Seiyu Nakamura",
    subtitle: "Okinawa Shorin-ryu"
  },

  {
    image: new URL("../assets/images/gallery/32.png", import.meta.url).href,
    title: "Héctor G. Ceballos",
    subtitle: "Okinawa Shorin-Ryu"
  },

  {
    image: new URL("../assets/images/gallery/33.png", import.meta.url).href,
    title: "Shugoro Nakazato",
    subtitle: "Okinawa Shorin-Ryu"
  },

  {
    image: new URL("../assets/images/gallery/34.png", import.meta.url).href,
    title: "Kiyoshi Tsuha",
    subtitle: "Okinawa Shorin-Ryu"
  },

  {
    image: new URL("../assets/images/gallery/35.png", import.meta.url).href,
    title: "Yuzo Shinzato",
    subtitle: "Okinawa Shorin-Ryu"
  },

  {
    image: new URL("../assets/images/gallery/36.png", import.meta.url).href,
    title: "Gilberto Israel",
    subtitle: "Okinawa Shorin-Ryu"
  },

  {
    image: new URL("../assets/images/gallery/37.png", import.meta.url).href,
    title: "Masahiro Nakamoto",
    subtitle: "Okinawa Kobu-Do"
  },

  {
    image: new URL("../assets/images/gallery/38.png", import.meta.url).href,
    title: "Zempo Shimabukuro",
    subtitle: "Okinawa Shorin-Ryu Shobayashi-Ryu"
  },

  {
    image: new URL("../assets/images/gallery/39.png", import.meta.url).href,
    title: "Eisuke Akamine",
    subtitle: "Okinawa Kobu-Do"
  },

  {
    image: new URL("../assets/images/gallery/40.png", import.meta.url).href,
    title: "Teruo Hayashi",
    subtitle: "Shito-ryu/Kobu-Do Kenshin-Ryu"
  },

  {
    image: new URL("../assets/images/gallery/41.png", import.meta.url).href,
    title: "Castelo de Shuri",
    subtitle: "Okinawa - 1997"
  },

  {
    image: new URL("../assets/images/gallery/42.png", import.meta.url).href,
    title: "Pietro Casella",
    subtitle: "Sankukai - Nanbudo"
  },

  {
    image: new URL("../assets/images/gallery/43.png", import.meta.url).href,
    title: "Koji Takamatsu e Yoshihide Shinzato",
    subtitle: "Wado-Ryu e Okinawa Shorin-Ryu"
  },

  {
    image: new URL("../assets/images/gallery/44.png", import.meta.url).href,
    title: "Michizo Buyo",
    subtitle: "Wado-Kai"
  },

  {
    image: new URL("../assets/images/gallery/45.png", import.meta.url).href,
    title: "Meitatsu Yagi",
    subtitle: "Okinawa Goju-Ryu Meibukan"
  },

  {
    image: new URL("../assets/images/gallery/46.png", import.meta.url).href,
    title: "Morio Higaonna",
    subtitle: "Okinawa Goju-Ryu IOGKF"
  },

  {
    image: new URL("../assets/images/gallery/47.png", import.meta.url).href,
    title: "Kiichi Nakamoto",
    subtitle: "Okinawa Goju-Ryu WOKKA"
  },

  {
    image: new URL("../assets/images/gallery/48.png", import.meta.url).href,
    title: "Yasunori Yonamine",
    subtitle: "Okinawa Goju-Ryu Ryubukai"
  },

  {
    image: new URL("../assets/images/gallery/49.png", import.meta.url).href,
    title: "Shinzo Chinen",
    subtitle: "Okinawa Goju-ryu Jundokan"
  },

  {
    image: new URL("../assets/images/gallery/50.png", import.meta.url).href,
    title: "Isamu Yamagawa",
    subtitle: "Okinawa Goju-ryu"
  },

  {
    image: new URL("../assets/images/gallery/51.png", import.meta.url).href,
    title: "Tomeji Ito",
    subtitle: "Shotokan"
  },

  {
    image: new URL("../assets/images/gallery/52.png", import.meta.url).href,
    title: "Hiroyasu Inoki",
    subtitle: "Shotokan ITKF"
  },

  {
    image: new URL("../assets/images/gallery/53.png", import.meta.url).href,
    title: "Tasuke Watanabe",
    subtitle: "Shotokan ITKF"
  },

  {
    image: new URL("../assets/images/gallery/54.png", import.meta.url).href,
    title: "Masahiko Tanaka",
    subtitle: "Shotokan JKA"
  },

  {
    image: new URL("../assets/images/gallery/55.png", import.meta.url).href,
    title: "Justo Gomez",
    subtitle: "Shotokan ITKF"
  },

  {
    image: new URL("../assets/images/gallery/56.png", import.meta.url).href,
    title: "Yoshizo Machida",
    subtitle: "Shotokan JKA"
  },

  {
    image: new URL("../assets/images/gallery/57.png", import.meta.url).href,
    title: "Yasuyuki Sasaki",
    subtitle: "Shotokan JKA"
  },

  {
    image: new URL("../assets/images/gallery/58.png", import.meta.url).href,
    title: "Hideo Yamamoto",
    subtitle: "Shotokan JKA"
  },

  {
    image: new URL("../assets/images/gallery/59.png", import.meta.url).href,
    title: "Kousaku Yokota",
    subtitle: "Shotokan-Tetsuhiko Asai"
  },

  {
    image: new URL("../assets/images/gallery/60.png", import.meta.url).href,
    title: "Tsuguo Sakumoto",
    subtitle: "Ryuei-Ryu"
  },

  {
    image: new URL("../assets/images/gallery/61.png", import.meta.url).href,
    title: "Francisco Filho",
    subtitle: "Karate Kyokushin"
  },

  {
    image: new URL("../assets/images/gallery/62.png", import.meta.url).href,
    title: "Woo Jae Lee",
    subtitle: "Taekwondo Marcial"
  },

  {
    image: new URL("../assets/images/gallery/63.png", import.meta.url).href,
    title: "Ricardo Kikuo Arasaki ",
    subtitle: "Judo"
  },

  {
    image: new URL("../assets/images/gallery/64.png", import.meta.url).href,
    title: "Tsutomu Nakahodo",
    subtitle: "Uechi-Ryu"
  },

  {
    image: new URL("../assets/images/gallery/65.png", import.meta.url).href,
    title: "Joe Corley - EUA",
    subtitle: "Brasil"
  },

  {
    image: new URL("../assets/images/gallery/66.png", import.meta.url).href,
    title: "Bill (Superfoot) Wallace",
    subtitle: "Ator americano em visita ao Brasil"
  }

]

export default function Gallery(){

  return(

    <div>

      <Navbar/>

      <section className="gallery-page">

        <div className="gallery-hero">

          <p className="gallery-tag">
            GALERIA
          </p>

          <h1 className="gallery-title">
            Registros do Mestre Wong
          </h1>

          <p className="gallery-subtitle">
            Momentos importantes, homenagens, títulos e registros históricos no Karate-Do.
          </p>

        </div>

        <div className="gallery-grid">

          {photos.map((photo, index) => (

            <div
              key={index}
              className="gallery-card"
            >

              <div className="gallery-image">

                <img
                  src={photo.image}
                  alt={photo.title}
                  loading="lazy"
                />

              </div>

              <div className="gallery-info">

                <h3>
                  {photo.title}
                </h3>

                <p>
                  {photo.subtitle}
                </p>

              </div>

            </div>

          ))}

        </div>

      </section>

      <Footer/>

    </div>

  )

}