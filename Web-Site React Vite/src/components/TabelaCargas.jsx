import s from "./TabelaCargas.module.css";

const cargas = [
  { id: 1023, carga: "Aço laminado", origem: "Curitiba", destino: "Joinville", status: "andamento" },
  { id: 1022, carga: "Bobinas de alumínio", origem: "Ponta Grossa", destino: "Curitiba", status: "pendente" },
  { id: 1021, carga: "Peças usinadas", origem: "Joinville", destino: "Blumenau", status: "andamento" },
  { id: 1020, carga: "Resina industrial", origem: "Araucária", destino: "Itajaí", status: "concluida" },
  { id: 1019, carga: "Chapas de aço", origem: "Curitiba", destino: "Londrina", status: "pendente" },
  { id: 1018, carga: "Componentes elétricos", origem: "Maringá", destino: "Cascavel", status: "andamento" },
  { id: 1017, carga: "Produtos químicos", origem: "Itajaí", destino: "Joinville", status: "concluida" },
  { id: 1016, carga: "Material plástico", origem: "Blumenau", destino: "Curitiba", status: "pendente" },
  { id: 1015, carga: "Equipamentos", origem: "Londrina", destino: "Maringá", status: "andamento" },
  { id: 1014, carga: "Papel industrial", origem: "Cascavel", destino: "Ponta Grossa", status: "concluida" },
  { id: 1013, carga: "Peças automotivas", origem: "Joinville", destino: "Curitiba", status: "pendente" },
  { id: 1012, carga: "Grãos", origem: "Maringá", destino: "Itajaí", status: "andamento" },
];

const nomesStatus = {
  andamento: "Em andamento",
  pendente: "Pendente",
  concluida: "Concluída",
};

function TabelaCargas() {
  return (
    <section className={s.container}>
      <h3 className={s.titulo}>Últimas cargas</h3>

      <div className={s.areaTabela}>
        <table className={s.tabela}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Carga</th>
              <th>Origem → Destino</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {cargas.map((item) => (
              <tr key={item.id}>
                <td>#{item.id}</td>
                <td>{item.carga}</td>
                <td>
                  {item.origem} → {item.destino}
                </td>
                <td>
                  <span
                    className={`${s.status} ${s[item.status]}`}
                  >
                    {nomesStatus[item.status]}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default TabelaCargas;