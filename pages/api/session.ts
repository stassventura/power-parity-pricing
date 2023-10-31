// Файл: pages/api/get-session.js

import Stripe from 'stripe';
import { NextApiRequest, NextApiResponse } from 'next';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16',
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { sessionId } = req.query;

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId as string);
    res.status(200).json(session);
  } catch (error) {
    res.status(500).json({ statusCode: 500, message: error.message });
  }
}
