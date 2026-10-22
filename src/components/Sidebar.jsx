import { Link, useLocation } from "react-router";
import s from "./Sidebar.module.css";

const itens = [
  { nome: "Dashboard", caminho: "/home", icone: "dashboard" },
  { nome: "Cadastro de Cargas", caminho: "/cadastrocargas", icone: "carga" },
  {
    nome: "Lista de Cargas",
    caminho: "/home#ultimas-cargas",
    icone: "lista",
  },
  { nome: "Sobre", caminho: "/", icone: "sobre" },
  { nome: "Perfil", caminho: "/home#perfil", icone: "perfil" },
];

const caminhosIcones = {
  dashboard: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </>
  ),
  carga: (
    <>
      <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" />
      <path d="m4.5 7.5 7.5 4 7.5-4M12 12v9M8 5l8 4.5" />
      <path d="M16 16h5m-2-2 2 2-2 2" />
    </>
  ),
  lista: (
    <>
      <path d="M9 6h12M9 12h12M9 18h12" />
      <path d="M4 6h.01M4 12h.01M4 18h.01" />
    </>
  ),
  sobre: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5m0-8h.01" />
    </>
  ),
  perfil: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21a8 8 0 0 1 16 0" />
    </>
  ),
  sair: (
    <>
      <path d="M10 17l5-5-5-5m5 5H3" />
      <path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7" />
    </>
  ),
};

function Icone({ nome }) {
  return (
    <svg
      className={s.icone}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {caminhosIcones[nome]}
    </svg>
  );
}

function Sidebar() {
  const location = useLocation();

  return (
    <aside className={s.sidebar}>
      <div className={s.perfilGestor} id="perfil">
        <h2>Área do gestor</h2>
        <p>Cristian Bilizário</p>
        <span>Metalúrgica Sul Ltda.</span>
      </div>

      <nav className={s.nav} aria-label="Navegação principal">
        {itens.map((item) => (
          <Link
            key={item.nome}
            to={item.caminho}
            aria-current={
              location.pathname === item.caminho.split("#")[0] &&
              location.hash ===
                (item.caminho.includes("#")
                  ? `#${item.caminho.split("#")[1]}`
                  : "")
                ? "page"
                : undefined
            }
            className={`${s.aba} ${
              location.pathname === item.caminho.split("#")[0] &&
              location.hash ===
                (item.caminho.includes("#")
                  ? `#${item.caminho.split("#")[1]}`
                  : "")
                ? s.ativa
                : ""
            }`}
          >
            <Icone nome={item.icone} />
            <span>{item.nome}</span>
          </Link>
        ))}
        <Link to="/login" className={s.aba}>  
          <Icone nome="sair" />
          <span>Sair</span>
        </Link>
      </nav>

      <div className={s.mensagem}>
        <h3>A tribo está com você.</h3>
        <p>Mais controle do estoque à entrega.</p>
      </div>
    </aside>
  );
}

export default Sidebar;
