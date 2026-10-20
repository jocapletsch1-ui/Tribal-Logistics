import s from "./GraficoBarras.module.css";

const dados = [
  { nome: "Pendentes", valor: 23, cor: "#ff7700" },
  { nome: "Em andamento", valor: 12, cor: "#ffffff" },
  { nome: "Concluídas", valor: 32, cor: "#ffe100" },
  { nome: "Total", valor: 67, cor: "#faab00" },
];

function GraficoBarras() {
  const maiorValor = Math.max(...dados.map((item) => item.valor));

  return (
    <div className={s.grafico} role="img" aria-label="Quantidade de cargas por status">
      {dados.map((item) => (
        <div className={s.coluna} key={item.nome}>
          <span
            className={s.barra}
            style={{
              height: `${(item.valor / maiorValor) * 100}%`,
              backgroundColor: item.cor,
            }}
            title={`${item.nome}: ${item.valor}`}
          />
          <span className={s.rotulo}>{item.nome}</span>
        </div>
      ))}
    </div>
  );
}

export default GraficoBarras;
