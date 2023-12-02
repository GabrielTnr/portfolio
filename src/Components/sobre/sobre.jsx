import "./sobre_style.scss"

export default function Sobre() {
  return (
    <>
      <main>
        <h1>Estudos</h1> 
        <section class="estudos">
          <div>
            <h1>2022-24</h1>
            <p>Análise e Desenvolvimento de Sistemas - <span class="textoVerde">IBGM</span></p>
          </div>
          <div><h1>2023-23</h1>
            <p>Curso de Desenvolvedor Front-End - <span class="textoVerde">VaiNaWeb</span></p>
          </div>
        </section>
        <h1>Tecnologias</h1>
        <section class="tecnologias">
          <figure>
            <div class="htmlIcon">
            <img src="https://cdn-icons-png.flaticon.com/512/732/732212.png" alt="HTML Icon" />
            </div>
            <div class="cssIcon">
            <img src="https://cdn-icons-png.flaticon.com/512/732/732190.png" alt="CSS Icon" />
            </div>
            <div class="jsIcon">
            <img src="https://i.imgur.com/VJF3Cia.png" alt="JavaScript Icon" />
            </div>
            <div class="reactIcon">
            <img src="https://cdn.iconscout.com/icon/free/png-256/free-react-3-1175109.png" alt="React Icon" />
            </div>
            <div class="sassIcon">
            <img class="sassImg" src="https://i.imgur.com/uvNmPSG.png" alt="Sass Icon" />
            </div>
          </figure>
        </section>
      </main>
    </>
  )
}