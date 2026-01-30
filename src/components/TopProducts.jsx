import { groupByProduct } from "../utils/calculations";

export default function TopProducts({ transactions }) {
  const grouped = groupByProduct(transactions);
  const sorted = Object.entries(grouped)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  return (
    <>
      <h3>Top 5 Products</h3>
      <ul>
        {sorted.map(([name, total]) => (
          <li key={name}>
            {name} - ${total}
          </li>
        ))}
      </ul>
    </>
  );
}
