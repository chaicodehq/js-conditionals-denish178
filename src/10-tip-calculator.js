/**
 * 🍽️ TipEasy - Restaurant Tip Calculator
 *
 * You're building TipEasy, an app that helps diners calculate the right
 * tip based on how they'd rate their dining experience. No more awkward
 * mental math at the table!
 *
 * Service Rating → Tip Percentage:
 *   - 1 (terrible)  → 5%
 *   - 2 (poor)      → 10%
 *   - 3 (okay)      → 15%
 *   - 4 (good)      → 20%
 *   - 5 (excellent) → 25%
 *
 * Return an object with:
 *   - tipPercentage: the percentage as a number (e.g., 15)
 *   - tipAmount: the calculated tip rounded to 2 decimal places
 *   - totalAmount: bill + tip rounded to 2 decimal places
 *
 * Rules:
 *   - If billAmount is 0 or negative, return null
 *   - If serviceRating is not an integer from 1 to 5, return null
 *
 * Example:
 *   calculateTip(50, 4)
 *   → { tipPercentage: 20, tipAmount: 10.00, totalAmount: 60.00 }
 *
 * @param {number} billAmount - The bill amount in dollars
 * @param {number} serviceRating - Service rating from 1 to 5
 * @returns {{ tipPercentage: number, tipAmount: number, totalAmount: number } | null}
 */

export function calculateTip(billAmount, serviceRating) {
  // Your code here
  // if (billAmount <= 0 || serviceRating <= 0 || serviceRating > 5) return null;
  // if(!Number.isInteger(serviceRating)) return null;

  // let tipAmt = 0;
  // let totalAmt = 0;

  // if (serviceRating == 1) {
  //   tipAmt = (billAmount * 5) / 100;
  //   totalAmt = billAmount + tipAmt;
  //   return {
  //     tipPercentage: 5,
  //     tipAmount: tipAmt,
  //     totalAmount: totalAmt,
  //   };
  // } else if (serviceRating == 2) {
  //   tipAmt = (billAmount * 10) / 100;
  //   totalAmt = billAmount + tipAmt;
  //   return {
  //     tipPercentage: 10,
  //     tipAmount: tipAmt,
  //     totalAmount: totalAmt,
  //   };
  // } else if (serviceRating == 3) {
  //   tipAmt = (billAmount * 15) / 100;
  //   totalAmt = billAmount + tipAmt;
  //   return {
  //     tipPercentage: 15,
  //     tipAmount: tipAmt,
  //     totalAmount: totalAmt,
  //   };
  // } else if (serviceRating == 4) {
  //   tipAmt = (billAmount * 20) / 100;
  //   totalAmt = billAmount + tipAmt;
  //   return {
  //     tipPercentage: 20,
  //     tipAmount: tipAmt,
  //     totalAmount: totalAmt,
  //   };
  // } else {
  //   tipAmt = (billAmount * 25) / 100;
  //   totalAmt = billAmount + tipAmt;
  //   return {
  //     tipPercentage: 25,
  //     tipAmount: tipAmt,
  //     totalAmount: totalAmt,
  //   };
  // }

  // Input validation
  if (billAmount <= 0) {
    return null;
  } else if (
    !Number.isInteger(serviceRating) ||
    serviceRating < 1 ||
    serviceRating > 5
  ) {
    return null;
  }

  let tipPercentage;

  if (serviceRating === 1) {
    tipPercentage = 5;
  } else if (serviceRating === 2) {
    tipPercentage = 10;
  } else if (serviceRating === 3) {
    tipPercentage = 15;
  } else if (serviceRating === 4) {
    tipPercentage = 20;
  } else {
    tipPercentage = 25;
  }

  const tipAmount = Number(((billAmount * tipPercentage) / 100).toFixed(2));
  const totalAmount = Number((billAmount + tipAmount).toFixed(2));

  return {
    tipPercentage,
    tipAmount,
    totalAmount,
  };
}
