import { TPaymentFailedForm } from '../types/TPaymentFailedForm';

export const sendFormData = async (data: TPaymentFailedForm) => {
  const response = await fetch('http://localhost:3000/api/formData', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const responseData = await response.json();

  if (!response.ok) {
    throw new Error(responseData.error || 'Unknown Error');
  }

  return {
    text: responseData.message,
    success: true,
  };
};
