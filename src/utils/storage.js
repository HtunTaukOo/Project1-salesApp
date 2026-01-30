const TRANSACTION_KEY = "transactions";
const CATEGORY_KEY = "customCategories";

export function getTransactions() {
  return JSON.parse(localStorage.getItem(TRANSACTION_KEY)) || [];
}

export function saveTransactions(data) {
  localStorage.setItem(TRANSACTION_KEY, JSON.stringify(data));
}

// 🔹 NEW
export function getCategories() {
  return JSON.parse(localStorage.getItem(CATEGORY_KEY)) || [];
}

export function saveCategory(category) {
  const existing = getCategories();
  if (!existing.includes(category)) {
    localStorage.setItem(
      CATEGORY_KEY,
      JSON.stringify([...existing, category])
    );
  }
}

