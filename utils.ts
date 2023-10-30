export const fetchDiscountData = async (country: string) => {
  const response = await fetch('http://localhost:3000/api/discount', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ country }),
  });

  if (!response.ok) {
    throw new Error('NOT_FOUND');
  }

  return await response.json();
};
