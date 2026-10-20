import s from "./GraficoMapa.module.css";

const veiculos = [
  { id: "#1023", carga: "Aço laminado", motorista: "Carlos Santos · ABC1D23" },
  { id: "#1021", carga: "Peças usinadas", motorista: "Paulo Lima · JKL4M56" },
];

function GraficoMapa() {
  return (
    <div className={s.painel}>
      <div className={s.mapa}>
        <svg
          className={s.arteMapa}
          viewBox="0 0 460 150"
          preserveAspectRatio="none"
          role="img"
          aria-label="Rota de Curitiba a Joinville"
        >
          <rect width="460" height="150" fill="#1a1913" />
          <path
            d="M0 18 130 54 252 39 460 110M42 150 202 92 340 38M298 0l12 150"
            fill="none"
            stroke="#777267"
            strokeWidth="1.5"
          />
          <path d="M0 0h170v55H0z" fill="#647047" opacity=".16" />
          <path d="M35 22c35-18 60 0 91 16s43 30 38 55-24 43-61 37S35 111 23 82 9 37 35 22Z" fill="#53603a" opacity=".25" />
          <path d="M118 56 328 116" fill="none" stroke="#ff7700" strokeWidth="4" />
          <circle cx="118" cy="56" r="5" fill="#ff7700" stroke="#fff" strokeWidth="2" />
          <circle cx="328" cy="116" r="5" fill="#ff7700" stroke="#fff" strokeWidth="2" />
          <text x="103" y="42">Curitiba</text>
          <text x="292" y="138">Joinville</text>
          <text x="214" y="48">BR-376</text>
          <text x="227" y="18">PARANÁ</text>
          <text x="168" y="143">SANTA CATARINA</text>
          <text x="10" y="137">20 km</text>
        </svg>
        <span className={`${s.caminhao} ${s.caminhaoA}`} aria-hidden="true">▣</span>
        <span className={`${s.caminhao} ${s.caminhaoB}`} aria-hidden="true">▣</span>
        <span className={s.mapaLabel}>Mapa ilustrativo</span>
      </div>

      <div className={s.veiculos}>
        <p className={s.ativos}><span />34 veículos ativos</p>
        {veiculos.map((veiculo) => (
          <article className={s.veiculo} key={veiculo.id}>
            <p>{veiculo.id} · {veiculo.carga}</p>
            <span className={s.iconeCaminhao} aria-hidden="true">
              ▣
            </span>
            <small>{veiculo.motorista}</small>
          </article>
        ))}
      </div>
    </div>
  );
}

export default GraficoMapa;
