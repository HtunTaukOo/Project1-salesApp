export default function SalesByProduct({ transactions }) {
  const salesMap = {};

  transactions.forEach(t => {
    salesMap[t.product] =
      (salesMap[t.product] || 0) + t.totalPrice;
  });

  const salesArray = Object.entries(salesMap);

  if (salesArray.length === 0) {
    return <p>No sales data for selected period.</p>;
  }

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Sales by Product</h3>
      <table border="1" width="100%" cellPadding="8">
        <thead>
          <tr>
            <th>Product</th>
            <th>Total Sales</th>
          </tr>
        </thead>
        <tbody>
          {salesArray.map(([product, total]) => (
            <tr key={product}>
              <td>{product}</td>
              <td>{total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
