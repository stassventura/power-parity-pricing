import type { NextApiRequest, NextApiResponse } from 'next';
import { PRODUCT_PRICE, PARITIES } from '../../constants';
type ResponseData =
  | {
      parityPrice: string;
      parity: number;
      PRODUCT_PRICE: number;
    }
  | {
      error: string;
    };

function getParityPrice(price: number, parity: number): string {
  return Number(Math.round(price - (parity * price) / 100)).toLocaleString('en-US', {
    currency: 'USD',
  });
}

export default function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  if (req.method === 'POST') {
    const { country } = req.body;
    if (country) {
      const parityPrice = getParityPrice(PRODUCT_PRICE, PARITIES[country]);
      const parity = PARITIES[country];

      res.status(200).json({ parityPrice, parity, PRODUCT_PRICE });
    } else {
      res.status(404);
    }
  }
}
