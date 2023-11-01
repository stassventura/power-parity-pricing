import type { NextApiRequest, NextApiResponse } from 'next';
import { getParityPrice } from '../../helpers';
import { PRODUCT_PRICE, PARITIES } from '../../helpers/constants';
type ResponseData =
  | {
      parityPrice: string;
      parity: number;
      PRODUCT_PRICE: number;
    }
  | {
      error: string;
    };

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
