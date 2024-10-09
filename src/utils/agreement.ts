export const formatAmountDisplay = (amount: number, isProfit: boolean) => {
  const million = Math.pow(10, 6);
  const thousand = Math.pow(10, 3);

  let displayedAmount = '';
  if (amount > million) {
    displayedAmount = `${(amount / million).toFixed(2)}M`;
  } else if (amount > thousand) {
    displayedAmount = `${(amount / thousand).toFixed(2)}K`;
  } else {
    displayedAmount = `${amount}`;
  }

  const mathSign = isProfit ? '+' : '-';

  return `${mathSign}$${displayedAmount}`;
};
