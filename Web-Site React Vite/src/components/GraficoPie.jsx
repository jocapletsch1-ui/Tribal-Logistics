import { Pie, PieChart, Tooltip } from "recharts";

const data = [
  { name: "Pendentes", value: 23, fill: "#FFFFFF" },
  { name: "Em andamento", value: 12, fill: "#FFE100" },
  { name: "Concluídos", value: 32, fill: "#faab00" },
];

function GraficoPie({ isAnimationActive = true, defaultIndex }) {
  return (
    <PieChart
      style={{ width: "100%", height: "100%" }}
      responsive
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
    >
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        innerRadius="48%"
        outerRadius="65%"
        dataKey="value"
        isAnimationActive={isAnimationActive}
      />
      <Tooltip
        content={() => null}
        cursor={{ fill: "rgba(99, 102, 241, 0.15)" }}
        defaultIndex={defaultIndex}
      />
    </PieChart>
  );
}

export default GraficoPie;