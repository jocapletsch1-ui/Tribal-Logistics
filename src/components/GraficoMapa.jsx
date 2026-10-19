import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  Rectangle,
} from "recharts";

// #region Sample data
const data = [
  {
    name: "Pendentes",
    Quantidade: 23,
  },
  {
    name: "Em andamento",
    Quantidade: 12,
  },
  {
    name: "Concluídos",
    Quantidade: 32,
  },
  {
    name: "Total",
    Quantidade: 64,
  },
];

const cores = [
  "#FF7700", // Concluídos
  "#FFFFFF", // Pendentes
  "#FFE100", // Em andamento
  "#faab00", // Total
];

const BarraPersonalizada = (props) => {
  const { index, ...rest } = props;

  return <Rectangle {...rest} fill={cores[index] ?? "#6366F1"} />;
};

// #endregion
const getIntroOfPage = (label) => {
  if (label === "Page A") {
    return "Este gráfico revela a quantidade total de pedidos, incluindo os pendentes, em andamento e concluídos.";
  }
  if (label === "Page B") {
    return "Esse gráfico revela a quantidade de pedidos pendentes.";
  }
  if (label === "Page C") {
    return "Esse gráfico revela a quantidade de pedidos em andamento.";
  }
  if (label === "Page D") {
    return "Este gráfico revela a quantidade de pedidos concluídos.";
  }
  if (label === "Page E") {
    return "Page E is about food";
  }
  if (label === "Page F") {
    return "Page F is about baby food";
  }
  return "";
};

const CustomTooltip = ({ active, payload, label }) => {
  const firstPayload = payload?.[0];
  const isVisible = active && firstPayload != null;
  return (
    <div
      className="custom-tooltip"
      style={{
        fontFamily: "Arial, sans-serif",
        fontSize: "14px",
        backgroundColor: "#fff",
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "10px",
        color: "#333",
        visibility: isVisible ? "visible" : "hidden",
      }}
    >
      {isVisible && (
        <>
          <p className="label">{`${label} : ${firstPayload.value}`}</p>
          <p className="intro">{getIntroOfPage(label)}</p>
          <p className="desc">
            Esse gráfico informa a quantidade determinada de cargas de cada
            categoria.
          </p>
        </>
      )}
    </div>
  );
};

const GraficoMapa = ({ isAnimationActive, defaultIndex }) => {
  return (
    <BarChart
      style={{
        width: "100%",
        maxWidth: "500px",
        maxHeight: "70vh",
        aspectRatio: 1.618,
      }}
      responsive
      data={data}
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 0,
      }}
    >
      <XAxis
        dataKey="name"
        tick={{ fill: "#b8b8b8", fontSize: 12, fontFamily: "Almarai, sans-serif" }}
        tickLine={false}
      />
      
      <Tooltip
        content={CustomTooltip}
        isAnimationActive={isAnimationActive}
        defaultIndex={defaultIndex}
      />
      <Bar
        dataKey="Quantidade"
        barSize={30}
        shape={BarraPersonalizada}
        isAnimationActive={isAnimationActive}
      />
    </BarChart>
  );
};

export default GraficoMapa;
