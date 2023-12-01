import "./inicio_style.scss";

export default function Inicio() {
  return (
    <>
      <header>
        <nav>
          <h1>PORTFOLIO</h1>
          <ul>
            <li>Início</li>
            <li>Sobre</li>
            <li>Projetos</li>
          </ul>
        </nav>
        <section>
          <h1>Olá, eu sou <span class="textoVerde">Gabriel Tenório</span></h1>
          <p>Eu sou um desenvolvedor front-end apaixonado por criar interfaces envolventes e interativas que proporcionam uma experiência excepcional aos usuários.</p>
          <figure>
            <img src="https://www.shareicon.net/download/2015/09/15/101512_logo_512x512.png" alt="GitHub Icon" />
            <img src="https://i.pinimg.com/originals/1f/db/d8/1fdbd88fec469fc342cdff7ea25b8bd8.jpg" alt="Linkedin Icon" />
          </figure>
        </section>
      </header>
    </>
  )
}