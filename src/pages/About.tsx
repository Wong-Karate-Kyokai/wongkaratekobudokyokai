import { useState, useRef, useEffect } from "react"

import "../styles/about.css"

import img1 from "../assets/images/sensei1.png"
import img2 from "../assets/images/sensei2.png"
import img3 from "../assets/images/sensei3.png"
import img4 from "../assets/images/sensei4.png"

export default function About(){

  const [open, setOpen] = useState(false)

  const aboutRef = useRef<HTMLElement>(null)

  useEffect(() => {

    const elements = document.querySelectorAll(".fade-in")

    const observer = new IntersectionObserver(
      (entries) => {

        entries.forEach(entry => {

          if(entry.isIntersecting){
            entry.target.classList.add("show")
          }

        })

      },
      { threshold: 0.15 }
    )

    elements.forEach(el => observer.observe(el))

    return () => observer.disconnect()

  }, [open])

  const handleClose = () => {

    setOpen(false)

    setTimeout(() => {

      aboutRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      })

    }, 100)

  }

  return(

    <section
      id="about"
      className="about"
      ref={aboutRef}
    >

      <div className="about-header fade-in">

        <p className="about-tag">
          O SENSEI
        </p>

        <h1 className="about-title">
          A Jornada de
          <br/>
          Rogério Wong
        </h1>

      </div>

      <div className="about-block fade-in">

        <div className="about-image">

          <img
            src={img1}
            className="img-1"
            alt="Sensei Rogério Wong"
          />

        </div>

        <div className="about-content">

          <p>
            <strong>Sensei Rogério Eng Wong, 8º dan em Karate e 6º dan em Kobudo</strong> iniciou a carreira em 1975, quando seus pais o levaram à academia do mestre Yoshihide Shinzato, um imigrante japonês que viria a ser o grande mentor de sua vida.
          </p>

          <p>
            Por ironia do destino ou não, a intenção de seu pai era educá-lo nas artes marciais chinesas, tal como o Kung Fu, porém, sete anos após deixar seu filho no dojo, Rogério Wong tornou-se faixa preta pela International Shorin-Ryu Karate-Do & Kobudo Shinshukan.
          </p>

          <p>
            Atualmente, com <strong>50 anos de prática e 41 anos de magistério</strong> na arte, o kyoshi já viveu diversas histórias: durante 25 anos acompanhou seu mestre por inúmeros países europeus, sul-americanos e asiáticos, entre eles, o Japão, mais especificamente a Ilha de Okinawa, berço originário do Karate.
          </p>

          <p>
            Foi na Espanha e Itália que percebeu que o suor e o kiai valeram a pena ao ver-se diante Igreja da Sagrada Família e da catedral de Duomo.
          </p>

          {!open && (

            <button
              className="about-button"
              onClick={() => setOpen(true)}
            >
              Continuar leitura
            </button>

          )}

        </div>

      </div>

      {open && (

        <>

          <div className="about-block reverse fade-in">

            <div className="about-image">

              <img
                src={img2}
                className="img-2"
                alt="Reconhecimentos"
              />

            </div>

            <div className="about-content">

              <p>
                Em 1987, durante a solenidade de 25 anos da Escola Shinshukan, recebeu honrosamente a placa de <strong>“Melhor Instrutor do Ano”</strong> das mãos de seu grão-mestre.
              </p>

              <p>
                Duas das conquistas mais recentes foram o recebimento dos títulos de Doutor Honoris Causa em Filosofia das Artes Marciais (2024) Doutor Honoris Causa em Artes Marciais (2017), ambos pela <strong>Erich Fromm University (EUA)</strong> e de Mestre Honoris Causa pela Faculdade Einstein (FACEI).
              </p>

              <p>
                Ao refletir sobre sua jornada, o mestre afirma:
              </p>

              <p className="about-quote">
                “fui ensinado a aguçar meus sentidos e perceber. O melhor que se aprende não é dito, é observado e praticado”.
              </p>

              <p>
                Já sobre as modalidades marciais, não lhe faltam palavras de admiração e reverência.
              </p>

              <p className="about-quote">
                “Acredito nas artes marciais como ferramentas pedagógicas de educação e humanização”.
              </p>

              <p>
                Gratidão eterna aos meus pais, Wong Wing Sen (em memória) e Eng Ron Sil Wong, ao seu mestre Yoshihide Shinzato (em memória), à sua esposa, filhos, familiares e os amigos de coração pelo apoio, incentivo, motivação e colaboração ao longo dos anos.
              </p>

              <p className="about-source">
                Fonte: Autor, 2024
              </p>

            </div>

          </div>

          <div className="about-block fade-in">

            <div className="about-image">

              <img
                src={img3}
                className="img-3"
                alt="Karate e Kobudo"
              />

            </div>

            <div className="about-content">

              <p>
                <strong>Sensei Rogério Wong é reconhecido como um dos mais habilidosos de sua área</strong>, sendo uma das principais referências no bunkai kata (aplicação de katas e manuseio de armas marciais, o Kobudo de Okinawa).
              </p>

              <p>
                Esteve por quase duas décadas na comissão técnica da seleção brasileira Shinshukan.
              </p>

              <p>
                Atualmente, é membro efetivo da banca examinadora de graduação superior de Karate e Kobudo.
              </p>

            </div>

          </div>

          <div className="about-block reverse fade-in">

            <div className="about-image">

              <img
                src={img4}
                alt="Sensei Rogério Wong"
              />

            </div>

            <div className="about-content">

              <p>
                É formado em Educação Física (CLARETIANO), Pedagogia (ULBRA) e Jornalismo (UNIMONTE), é pós-graduado em Karate: Bases Metodológicas e Psicológicas do Treinamento (UNISANTA) e pós-graduado em Psicopedagogia (ENIAC).
              </p>

              <p>
                Hoje, aos 60 anos, é professor em instituições de ensino, promove encontros e workshops sobre técnicas, ministra palestras em congressos e cursos de máxima qualificação ao redor do Brasil.
              </p>

              <p>
                Recebeu honrarias das prefeituras de Santos/SP, São Vicente/SP, Marília/SP, Uberaba/MG, e de São Pedro da Aldeia/RJ, pelas grandes contribuições em prol das artes marciais e do desporto nacional.
              </p>

            </div>

          </div>

          <button
            className="about-button about-button-right"
            onClick={handleClose}
          >
            Ver menos
          </button>

        </>

      )}

    </section>

  )

}