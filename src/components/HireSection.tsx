import { useEffect } from "react"

import "../styles/hire.css"

export default function HireSection(){

  useEffect(() => {

    const elements = document.querySelectorAll(".fade-in")

    const observer = new IntersectionObserver(

      entries => {

        entries.forEach(entry => {

          if(entry.isIntersecting){

            entry.target.classList.add("show")

          }

        })

      },

      {
        threshold:.2
      }

    )

    elements.forEach(
      element => observer.observe(element)
    )

    return () => observer.disconnect()

  },[])

  return(

    <section
      id="contato"
      className="hire"
    >

      <div className="hire-container">

        <div className="hire-header fade-in">
          <h2>
            Entre em Contato
          </h2>

          <p>
            Utilize este espaço para entrar em contato a respeito de treinamentos preparatórios para graduação, seminários, cursos, aulas de defesa pessoal, entrevistas e demais atividades conduzidas pelo Sensei Rogério Wong.
          </p>

        </div>

        <form
          action="https://formsubmit.co/contato@wongkaratekobudo.com"
          method="POST"
          className="hire-form fade-in"
        >

          <input
            type="hidden"
            name="_subject"
            value="Novo contato pelo site Wong Karate Kobu-Do"
          />

          <input
            type="hidden"
            name="_captcha"
            value="false"
          />

          <input
            type="hidden"
            name="_template"
            value="table"
          />

          <input
            type="text"
            name="Nome"
            placeholder="Nome"
            required
          />

          <input
            type="email"
            name="Email"
            placeholder="E-mail"
            required
          />

          <input
            type="text"
            name="Cidade"
            placeholder="Cidade"
            required
          />

          <input
            type="text"
            name="Pais"
            placeholder="País"
            required
          />

          <select
            name="Assunto"
            required
          >

            <option value="">
              Selecione o assunto
            </option>

            <option value="Treinamento Preparatório para Graduação">
              Treinamento Preparatório para Graduação
            </option>

            <option value="Seminário/Curso">
              Seminário/Curso
            </option>

            <option value="Aula de defesa pessoal individual">
              Aula de defesa pessoal individual
            </option>

            <option value="Aula de defesa pessoal coletiva">
              Aula de defesa pessoal coletiva
            </option>

            <option value="Convidar para entrevista">
              Convidar para entrevista
            </option>

            <option value="Convidar para podcast">
              Convidar para podcast
            </option>

          </select>

          <textarea
            name="Mensagem"
            placeholder="Mensagem"
            required
          />

          <button type="submit">
            ENVIAR MENSAGEM
          </button>

        </form>

      </div>

    </section>

  )

}