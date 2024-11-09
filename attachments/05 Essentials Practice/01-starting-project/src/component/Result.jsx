import { calculateInvestmentResults } from "../util/investment.js";

export default function Result({ input }) {
  const resultData = calculateInvestmentResults(input);
  console.log(resultData);
  return <p>Result...</p>;
}
