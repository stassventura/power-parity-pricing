import fs from 'fs';
import path from 'path';

export const generateId = () => {
  return Math.floor(Math.random() * 900000) + 100000;
};

export const getParityPrice = (price: number, parity: number): string => {
  return Number(Math.round(price - (parity * price) / 100)).toLocaleString('en-US', {
    currency: 'USD',
  });
};

export const appendToFile = (fileName: string, data: any) => {
  const filePath = path.join(process.cwd(), fileName);

  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify([]));
  }

  const fileData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  fileData.push(data);
  fs.writeFileSync(filePath, JSON.stringify(fileData, null, 2));
};
