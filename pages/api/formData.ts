import type { NextApiRequest, NextApiResponse } from 'next';
import { appendToFile } from '../../helpers';
import { pathToFormData } from '../../helpers/constants';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const expectedFields = ['firstName', 'secondName', 'moneyAmount', 'message'];

    const isValid = expectedFields.every((field) => req.body[field]);

    if (!isValid) {
      return res.status(400).json({ error: 'Invalid form data' });
    }

    const dataToSave = {
      ...req.body,
      moneyAmount: parseFloat(req.body.moneyAmount),
    };

    if (isNaN(dataToSave.moneyAmount)) {
      return res.status(400).json({ error: 'Invalid moneyAmount value' });
    }

    appendToFile(pathToFormData, dataToSave);
    return res.status(200).json({ message: 'Your message has been successfully sent!' });
  } else {
    return res.status(404).json({ error: 'Not Found' });
  }
}
