import { PieChart, Pie, Tooltip } from "recharts";
import { groupByCategory } from "../utils/calculations";

export default function PieChartComponent({ transactions }) {
  const grouped = groupByCategory(transactions);
  const data = Object.keys(grouped).map(key => ({
    name: key,
    value: grouped[key]
  }));

  return (
    <>
      <h3>Sales by Category</h3>
      <PieChart width={400} height={300}>
        <Pie data={data} dataKey="value" nameKey="name" />
        <Tooltip />
      </PieChart>
    </>
  );
}
