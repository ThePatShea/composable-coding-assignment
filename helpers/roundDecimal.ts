function roundDecimal(num: number, decimals: number): number {
  const factor: number = Math.pow(10, decimals);
  return Math.round(num * factor) / factor;
}

export default roundDecimal;
