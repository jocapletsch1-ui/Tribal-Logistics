import { Pie, PieChart, Sector, Tooltip, } from 'recharts';

const data = [
  { name: 'Pendentes', value: 23, fill: '#FFFFFF' },
  { name: 'Em andamento', value: 12, fill: '#FFE100' },
  { name: 'Concluídos', value: 32, fill: '#faab00' },
];
const renderActiveShape = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  startAngle,
  endAngle,
  fill,
  payload,
  percent,
  value,
}) => {
  const RADIAN = Math.PI / 180;
  const sin = Math.sin(-RADIAN * (midAngle ?? 1));
  const cos = Math.cos(-RADIAN * (midAngle ?? 1));
  const sx = (cx ?? 0) + ((outerRadius ?? 0) + 10) * cos;
  const sy = (cy ?? 0) + ((outerRadius ?? 0) + 10) * sin;
  const mx = (cx ?? 0) + ((outerRadius ?? 0) + 30) * cos;
  const my = (cy ?? 0) + ((outerRadius ?? 0) + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={(outerRadius ?? 0) + 6}
        outerRadius={(outerRadius ?? 0) + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#ffef08">{`Quantidade: ${value}`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#df0101">
        {`(Rate ${((percent ?? 1) * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};
function GraficoPie({
    isAnimationActive = true,
    defaultIndex = undefined,
}) {

    return (
        <>


            <PieChart
                style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1, transform: '200ms all ease-in-out' }}
                responsive
                margin={{
                    top: 50,
                    right: 120,
                    bottom: 0,
                    left: 120,
                }}
            >
                <Pie
                    activeShape={renderActiveShape}
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius="60%"
                    outerRadius="80%"
                    dataKey="value"
                    isAnimationActive={isAnimationActive}
                />
                <Tooltip content={() => null}  cursor={{ fill: 'rgba(99, 102, 241, 0.15)' }} defaultIndex={defaultIndex} />
            </PieChart>

        </>
    )
}
export default GraficoPie