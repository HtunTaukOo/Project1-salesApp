export function calculateTotalSales(transactions) {
  return transactions.reduce((sum, t) => sum + t.totalPrice, 0);
}

export function groupByProduct(transactions) {
  const result = {};
  transactions.forEach(t => {
    result[t.product] = (result[t.product] || 0) + t.totalPrice;
  });
  return result;
}

export function groupByCategory(transactions) {
  const result = {};
  transactions.forEach(t => {
    result[t.category] = (result[t.category] || 0) + t.totalPrice;
  });
  return result;
}

export function filterTransactionsByPeriod(transactions, period) {
  const now = new Date();

  return transactions.filter(t => {
    const transactionDate = new Date(t.date);

    if (period === "daily") {
      return transactionDate.toDateString() === now.toDateString();
    }

    if (period === "weekly") {
      const diffTime = now - transactionDate;
      const diffDays = diffTime / (1000 * 60 * 60 * 24);
      return diffDays <= 7;
    }

    if (period === "monthly") {
      return (
        transactionDate.getMonth() === now.getMonth() &&
        transactionDate.getFullYear() === now.getFullYear()
      );
    }

    return true;
  });
}

