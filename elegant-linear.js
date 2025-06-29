function maxProfit(prices) {
  if (prices.length < 2) return -1;

  let minPrice = prices[0];
  let maxProfit = -1;

  for (let i = 1; i < prices.length; i++) {
    const current = prices[i];
    const potentialProfit = current - minPrice;

    if (potentialProfit > maxProfit) {
      maxProfit = potentialProfit;
    }

    if (current < minPrice) {
      minPrice = current;
    }
  }

  return maxProfit > 0 ? maxProfit : -1;
}