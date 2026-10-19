import GraficoMapa from "./components/GraficoMapa";
import GraficoPie from "./components/GraficoPie";
import s from "./Home.module.css";
import Sidebar from "./components/Sidebar";

// mesmos valores e cores do GraficoPie, só para montar a legenda
const legendaPie = [
  { nome: "Pendentes", valor: 23, cor: "#FFFFFF" },
  { nome: "Em andamento", valor: 12, cor: "#FFE100" },
  { nome: "Concluídos", valor: 32, cor: "#faab00" },
];
const totalPie = legendaPie.reduce((soma, d) => soma + d.valor, 0);

function Home() {
  return (
    <div className={s.conteudo}>
      <Sidebar />
      <header className={s.parteDeCima}>
        <h1 className={s.titulo}>
          Tribal
          <span className={s.tituloLinha2}>Logistics</span>
        </h1>
        <div className={s.nav}>
          <h2 className={s.tituloPagina}>Dashboard</h2>
          <p>Olá gestor, bem vindo ao menu de cargas.</p>
        </div>
        <button className={s.botaoCarga} type="button">
          + Nova Carga
        </button>
      </header>

      <main className={s.areaGraficos}>
        <div className={s.quadrado} aria-hidden="true"></div>

        <div className={s.graficos1}>
          <h3 className={s.tituloGrafico}>cargas por status</h3>

          <div className={s.corpoGrafico}>
            <div className={s.donut}>
              <div className={s.donutGrafico}>
                <GraficoPie />
              </div>
              <div className={s.centroDonut}>
                <span className={s.totalDonut}>{totalPie}</span>
                <span className={s.textoDonut}>cargas</span>
              </div>
            </div>

            <ul className={s.legendaGrafico}>
              {legendaPie.map((d) => (
                <li key={d.nome} className={s.itemLegenda}>
                  <span className={s.marcador} style={{ backgroundColor: d.cor }} />
                  <div>
                    <p className={s.nomeLegenda}>{d.nome}</p>
                    <p className={s.valorLegenda}>
                      {d.valor} · {Math.round((d.valor / totalPie) * 100)}%
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={s.graficos2}>
          <GraficoMapa />
        </div>
      </main>
    </div>
  );
}
export default Home;