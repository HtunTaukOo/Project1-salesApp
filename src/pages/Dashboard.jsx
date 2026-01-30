import { useState } from "react";
import { getTransactions } from "../utils/storage";
import { calculateTotalSales, filterTransactionsByPeriod } from "../utils/calculations";
import LineChartComponent from "../components/LineChartComponent";
import PieChartComponent from "../components/PieChartComponent";
import SalesByProduct from "../components/SalesByProduct";

export default function Dashboard() {
  const [transactions] = useState(() => getTransactions());
  const [period, setPeriod] = useState("daily");

  const filteredTransactions = filterTransactionsByPeriod(
    transactions,
    period
  );

  const periodSales = calculateTotalSales(filteredTransactions);
  const allTimeSales = calculateTotalSales(transactions);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Dashboard</h2>

      <h3>Total Sales (All Time): {allTimeSales}</h3>

      <label>
        Sales Summary:
        <select
          value={period}
          onChange={e => setPeriod(e.target.value)}
          style={{ marginLeft: "10px" }}
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
      </label>

      <h3>
        {period.charAt(0).toUpperCase() + period.slice(1)} Sales: {periodSales}
      </h3>

      <LineChartComponent transactions={filteredTransactions} />
      <PieChartComponent transactions={filteredTransactions} />
      <SalesByProduct transactions={filteredTransactions} />
    </div>
  );
}


