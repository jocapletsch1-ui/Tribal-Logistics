import GraficoBarras from "./components/GraficoBarras";
import GraficoPie from "./components/GraficoPie";
import TabelaCargas from "./components/TabelaCargas";
import Sidebar from "./components/Sidebar";
import s from "./Home.module.css";
import { Link } from "react-router";

const legendaPie = [
  { nome: "Pendentes", valor: 23, cor: "#FFFFFF" },
  { nome: "Em andamento", valor: 12, cor: "#FFE100" },
  { nome: "Concluídos", valor: 32, cor: "#faab00" },
];

const totalPie = legendaPie.reduce(
  (soma, item) => soma + item.valor,
  0
);

const cardsResumo = [
  { numero: "67", titulo: "Total", texto: "Cargas em outubro" },
  { numero: "23", titulo: "Pendentes", texto: "Aguardando aceite" },
  { numero: "12", titulo: "Em andamento", texto: "Em transporte" },
  { numero: "32", titulo: "Concluídas", texto: "Entregas finalizadas" },
];

function Home() {
  return (
    <div className={s.conteudo}>
      <Sidebar />

      <div className={s.pagina}>
        <header className={s.parteDeCima}>
          <h1 className={s.titulo}>
            Tribal
            <span className={s.tituloLinha2}>Logistics</span>
          </h1>

          <div className={s.intro}>
            <h2 className={s.tituloPagina}>Dashboard</h2>
            <p>Olá gestor, bem-vindo ao menu de cargas.</p>
          </div>

          <Link to="/cadastrocargas" className={s.botaoCarga}>
            + Nova carga
          </Link>
        </header>

        <section
          className={s.resumoCards}
          aria-label="Resumo de cargas"
        >
          {cardsResumo.map((card) => (
            <article key={card.titulo} className={s.cardResumo}>
              <div className={s.numeroCard}>{card.numero}</div>

              <div className={s.cardTextoWrap}>
                <div className={s.textoCard}>{card.titulo}</div>
                <span className={s.subTextoCard}>{card.texto}</span>
              </div>
            </article>
          ))}
        </section>

        <main className={s.areaGraficos}>
          <div className={s.quadrado} aria-hidden="true" />

          <section className={s.graficos1}>
            <h3 className={s.tituloGrafico}>Cargas por status</h3>

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
                {legendaPie.map((item) => (
                  <li key={item.nome} className={s.itemLegenda}>
                    <span
                      className={s.marcador}
                      style={{ backgroundColor: item.cor }}
                    />

                    <div>
                      <p className={s.nomeLegenda}>{item.nome}</p>
                      <p className={s.valorLegenda}>
                        {item.valor} ·{" "}
                        {Math.round((item.valor / totalPie) * 100)}%
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className={s.graficos2}>
            <GraficoBarras />
          </section>

          <section className={s.graficos3} id="ultimas-cargas">
            <TabelaCargas />
          </section>
        </main>
        <footer className={s.rodape}>
          Tribal Logistics · Gestão de estoque e cargas
        </footer>
      </div>
    </div>
  );
}
export default Home;