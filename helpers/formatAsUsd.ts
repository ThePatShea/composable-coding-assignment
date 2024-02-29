const formatAsUSD = (value: number): string => 
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value);

export default formatAsUSD;
