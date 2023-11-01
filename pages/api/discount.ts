import type { NextApiRequest, NextApiResponse } from 'next';
import { getParityPrice } from '../../helpers';
import { PRODUCT_PRICE, PARITIES } from '../../helpers/constants';
import { TDiscountData } from '../../types/TDiscountData';

export default function handler(req: NextApiRequest, res: NextApiResponse<TDiscountData>) {
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
