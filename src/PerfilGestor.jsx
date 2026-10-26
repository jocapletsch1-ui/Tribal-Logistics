import CabecalhoPagina from "./components/CabecalhoPagina";
import Sidebar from "./components/Sidebar";
import s from "./PerfilGestor.module.css";

function PerfilGestor() {
  return (
    <div className={s.conteudo}>
      <div className="fundoDashboard" aria-hidden="true" />
      <div className={s.CabecalhoPagina}>
        <CabecalhoPagina
          titulo="Perfil do Gestor"
          descricao="Consulte e gerencie as informações do seu perfil."
        />
      </div>

      <main className={s.pagina}>
        <div className={s.cartoesPerfil}>
          <section className={s.wrap1} aria-labelledby="informacoes-pessoais">
            <div className={s.cardInfos}>
              <h2 id="informacoes-pessoais">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 20c1.6-3.2 4.2-4.8 8-4.8s6.4 1.6 8 4.8" />
                </svg>
                Informações pessoais
              </h2>
              <div className={s.divMargin}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 20c1.6-3.2 4.2-4.8 8-4.8s6.4 1.6 8 4.8" />
                </svg>
                <div>
                  <h1>Não informado</h1>
                  <p>Perfil do gestor</p>
                </div>
              </div>
              <div className={s.wrapBaixo}>
                <p>Nome completo</p>
                <h3>Não informado</h3>
                <div className={s.divRow}>
                  <div>
                    <p>E-mail</p>
                    <h3>Não informado</h3>
                  </div>
                  <div>
                    <p>Telefone</p>
                    <h3>Não informado</h3>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            className={s.cardDados}
            aria-labelledby="dados-profissionais"
          >
            <h2 id="dados-profissionais">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="3" y="7" width="18" height="14" rx="2" />
                <path d="M8 7V4h8v3m-13 5h18m-11 0v2h4v-2" />
              </svg>
              Dados profissionais
            </h2>
            <p className={s.descricaoProfissional}>
              Informações de atuação e vínculo profissional.
            </p>
            <div className={s.dadoProfissional}>
              <p>Cargo</p>
              <h3>Não informado</h3>
            </div>
            <div className={s.dadoProfissional}>
              <p>Empresa</p>
              <h3>Não informado</h3>
            </div>
          </section>
          
          <section className={s.parteBaixa}>
            <div className={s.parte1}>
              <h2>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  style={{
                    width: 22,
                    height: 22,
                    marginRight: 8,
                    color: "#ff7900",
                    verticalAlign: "middle",
                  }}
                >
                  <path d="M12 3 4.5 6v5c0 5 3.2 8.5 7.5 10 4.3-1.5 7.5-5 7.5-10V6L12 3Z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                Segurança
              </h2>
              <p>Altere sua senha pra manter o acesso protegido.</p>
              <button>Alterar Senha</button>
            </div>
          </section>
          
          <section className={s.parteBaixa}>
            <div className={s.parte2}>
              <h2>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  style={{
                    width: 22,
                    height: 22,
                    marginRight: 8,
                    color: "#ff7900",
                    verticalAlign: "middle",
                  }}
                >
                  <path d="M4 6h16M4 12h16M4 18h16" />
                  <circle cx="9" cy="6" r="2" fill="#0b0805" />
                  <circle cx="15" cy="12" r="2" fill="#0b0805" />
                  <circle cx="11" cy="18" r="2" fill="#0b0805" />
                </svg>
                Preferências
              </h2>
              <p>Notificações e configurações</p>
              <p style={{ opacity: 0.8 }}>
                Nenhuma configuração disponível pra este perfil.
              </p>
            </div>
          </section>
        </div>
      </main>
      <Sidebar />
    </div>
  );
}

export default PerfilGestor;