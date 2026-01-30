import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

export default function LineChartComponent({ transactions }) {
  const data = transactions.map(t => ({
    date: t.date,
    sales: t.totalPrice
  }));

  return (
    <>
      <h3>Sales Trend</h3>
      <LineChart width={500} height={300} data={data}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line dataKey="sales" />
      </LineChart>
    </>
  );
}
