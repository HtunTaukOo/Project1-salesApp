export default function SalesTable({ transactions }) {
  if (!transactions || transactions.length === 0) {
    return <p>No transactions recorded.</p>;
  }

  return (
    <table
      border="1"
      width="100%"
      cellPadding="8"
      style={{ marginTop: "20px", borderCollapse: "collapse" }}
    >
      <thead>
        <tr style={{ backgroundColor: "#f0f0f0" }}>
          <th>Date</th>
          <th>Product</th>
          <th>Category</th>
          <th>Description</th>
          <th>Quantity</th>
          <th>Inventory</th>
          <th>Unit Price</th>
          <th>Total Price</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(transaction => (
          <tr key={transaction.id}>
            <td>{transaction.date}</td>
            <td>{transaction.product}</td>
            <td>{transaction.category}</td>
            <td>{transaction.description}</td>
            <td>{transaction.quantity}</td>
            <td>{transaction.inventory}</td>
            <td>{transaction.unitPrice}</td>
            <td>{transaction.totalPrice}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
