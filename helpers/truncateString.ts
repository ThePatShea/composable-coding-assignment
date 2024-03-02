const TRUNCATE_LENGTH: number = 5;
const MAX_LENGTH: number = 10;

function truncateString(str: string): string {
  if (str.length <= MAX_LENGTH) {
    return str;
  }

  const firstFive: string = str.substring(0, TRUNCATE_LENGTH);
  const lastFive: string = str.substring(str.length - TRUNCATE_LENGTH);

  return `${firstFive}...${lastFive}`;
}

export default truncateString;
