import { useState } from "react";
import products from "../data/product-item.json";
import {
  getTransactions,
  saveTransactions,
  saveCategory
} from "../utils/storage";
import SalesTable from "../components/SalesTable";

export default function SalesJournal() {
  const [transactions, setTransactions] = useState(() => getTransactions());
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [date, setDate] = useState("");
  const [customCategory, setCustomCategory] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    let product = products.find(p => p.itemName === Number(productName));
    let category = product?.category || customCategory;

    if (!category) return;

    if (!product) {
      product = {
        itemName: "Custom Item",
        description: "User defined item",
        unitPrice: 0,
        inventory: "-"
      };
    }

    const totalPrice = product.unitPrice * quantity;

    const newTransaction = {
      id: Date.now(),
      product: product.itemName,
      category,
      quantity,
      description: product.description,
      unitPrice: product.unitPrice,
      date,
      inventory: product.inventory,
      totalPrice
    };

    const updated = [...transactions, newTransaction];
    setTransactions(updated);
    saveTransactions(updated);

    saveCategory(category);

    setCustomCategory("");
    setProductName("");
  }

  return (
    <div className="card">
      <h2>Sales Journal</h2>

      <form onSubmit={handleSubmit} className="form-grid">
        <select
          value={productName}
          onChange={e => setProductName(e.target.value)}
        >
          <option value="">Other / Custom</option>
          {products.map(p => (
            <option key={p.id} value={p.id}>
              {p.itemName}
            </option>
          ))}
        </select>

        {!productName && (
          <input
            type="text"
            placeholder="Enter custom category"
            value={customCategory}
            onChange={e => setCustomCategory(e.target.value)}
            required
          />
        )}

        <input
          type="number"
          min="1"
          value={quantity}
          onChange={e => setQuantity(Number(e.target.value))}
          required
        />

        <input
          type="date"
          value={date}
          onChange={e => setDate(e.target.value)}
          required
        />

        <button type="submit">Add Sale</button>
      </form>

      <SalesTable transactions={transactions} />
    </div>
  );
}



