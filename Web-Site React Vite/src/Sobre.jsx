import CabecalhoPagina from "./components/CabecalhoPagina";
import Sidebar from "./components/Sidebar";
import s from "./Sobre.module.css";

function Sobre() {
  return (
    <div className={s.conteudo}>
      <div className="fundoDashboard" aria-hidden="true" />
      <div className={s.cabecalhoPagina}>
        <CabecalhoPagina
          titulo="Sobre"
          descricao="Conheça a missão e os valores da Tribal Logistics."
        />
      </div>
      
      <main className={s.pagina}>
        <div className={s.painelSobre}>
          <div className={s.colunaHistoria}>
            <section className={s.missao} aria-labelledby="missao-titulo">
              <p>Nossa missão</p>
              <h1 id="missao-titulo">
                A tribo estará aqui pra resolver seu problema.
              </h1>
              <p>
                Simplificar a logística industrial, conectando estoque, cargas
                e transporte com informação clara para cada decisão do gestor.
              </p>
              <p>Da coleta à entrega, sua operação organizada.</p>
            </section>

            <div>
              <section className={s.beneficios} aria-label="Nossos benefícios">
                <article className={s.beneficio}>
                  <h2>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="m13 2-3 8H5l6 12 1-9h6L13 2Z" />
                    </svg>
                    Eficiência
                  </h2>
                  <p>
                    Menos retrabalho e mais agilidade para planejar coletas e
                    entregas.
                  </p>
                </article>

                <article className={s.beneficio}>
                  <h2>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M12 3 4.5 6v5c0 5 3.2 8.5 7.5 10 4.3-1.5 7.5-5 7.5-10V6L12 3Z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                    Segurança
                  </h2>
                  <p>
                    Dados confiáveis e acompanhamento em cada etapa do
                    transporte.
                  </p>
                </article>

                <article className={s.beneficio}>
                  <h2>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                      <circle cx="12" cy="10" r="2.5" />
                    </svg>
                    Rastreamento
                  </h2>
                  <p>
                    Veículos e rotas visíveis para você saber onde sua carga
                    está.
                  </p>
                </article>

                <article className={s.beneficio}>
                  <h2>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="5" r="2.5" />
                      <circle cx="6" cy="16" r="2.5" />
                      <circle cx="18" cy="16" r="2.5" />
                      <path d="m10.8 7.2-3.6 6.6m6-6.6 3.6 6.6M8.5 16h7" />
                    </svg>
                    Organização
                  </h2>
                  <p>
                    Registros, prazos e responsáveis reunidos em um único
                    lugar.
                  </p>
                </article>
              </section>
            </div>
          </div>

          <section className={s.contato} aria-labelledby="contato-titulo">
            <div>
              <h2 id="contato-titulo">Fale com a tribo</h2>
              <p>
                Tem uma dúvida ou sugestão? Envie sua mensagem para nossa
                equipe.
              </p>
            </div>

            <form className={s.formulario}>
              <div className={s.campos}>
                <div className={s.campo}>
                  <label htmlFor="sobre-nome">Nome </label>
                  <input
                    id="sobre-nome"
                    name="nome"
                    type="text"
                    placeholder="Seu nome"
                    required
                  />
                </div>
                <div className={s.campo}>
                  <label htmlFor="sobre-email">E-mail </label>
                  <input
                    id="sobre-email"
                    name="email"
                    type="email"
                    placeholder="seu@email.com"
                    required
                  />
                </div>
                <div className={s.campo}>
                  <label htmlFor="sobre-assunto">Assunto </label>
                  <input
                    id="sobre-assunto"
                    name="assunto"
                    type="text"
                    placeholder="Como podemos ajudar?"
                    required
                  />
                </div>
                <div className={s.campo}>
                  <label htmlFor="sobre-mensagem">Mensagem </label>
                  <textarea
                    id="sobre-mensagem"
                    name="mensagem"
                    rows="4"
                    placeholder="Escreva sua mensagem"
                    required
                    style={{opacity: 0.6}}
                  />
                </div>
              </div>
              <div className={s.acoes}>
                <button type="button">Enviar mensagem</button>
              </div>
            </form>

            <div className={s.contatoInfo}>
              <p>contato@triballogistics.com.br</p>
              <p>Segunda a sexta · 08:00 às 18:00</p>
            </div>
          </section>
        </div>
      </main>
      <Sidebar />
    </div>
  );
}

export default Sobre;
