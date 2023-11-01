import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export async function handleCheckout(name: string, amount: number, image: string) {
  const stripe = await stripePromise;

  const response = await fetch('http://localhost:3000/api/payment/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, amount, image }),
  });

  const session = await response.json();

  const result = await stripe.redirectToCheckout({ sessionId: session.id });

  if (result.error) {
    alert(result.error.message);
  }
}
