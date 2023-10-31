import React, { ChangeEvent, FormEvent, useState, KeyboardEvent } from 'react';
import Image from 'next/image';
import map from '../../public/map.svg';

const ErrorPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    secondName: '',
    moneyAmount: '',
    message: '',
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (!/[0-9]/.test(event.key)) {
      event.preventDefault();
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div>
        <div className="fixed inset-0 overflow-hidden opacity-75 bg-[#f8fafb]">
          <Image alt="World Map" src={map} layout="fill" objectFit="cover" quality={100} />
        </div>
        <main className="relative flex flex-col items-center flex-1  sm:p-0 text-center z-10 w-full px-2">
          <h1 className="text-3xl sm:text-5xl font-bold">Payment failed</h1>
          <p className="mt-4 sm:text-xl text-lg text-gray-700">
            Oops... Something happened during your payment
          </p>
          <section className="border border-gray-300 bg-white rounded-lg shadow-lg mt-7 px-4 pb-4 w-full hover:shadow-2xl transition sm:w-[400px] pt-7">
            <h4 className="font-semibold text-xl  text-left">Contact form</h4>
            <h5 className="text-sm  text-left mt-5">
              Describe to us why the payment might not go through
            </h5>
            <form className="mt-5" onSubmit={handleSubmit}>
              <div className="flex gap-5">
                <div className="flex flex-col text-black flex-1">
                  <label htmlFor="" className=" w-fit text-sm font-medium">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="h-10 w-full border-gray-200 border rounded-md mt-1 outline-none px-2"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="flex flex-col text-black flex-1">
                  <label htmlFor="" className=" w-fit text-sm font-medium">
                    Second Name
                  </label>
                  <input
                    type="text"
                    className="h-10 w-full border-gray-200 border rounded-md mt-1 outline-none px-2"
                    id="secondName"
                    value={formData.secondName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col text-black mt-5">
                <label htmlFor="" className=" w-fit text-sm font-medium">
                  Money amount
                </label>
                <input
                  type="number"
                  className="h-10 w-full border-gray-200 border rounded-md my-1 outline-none px-2 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  id="moneyAmount"
                  value={formData.moneyAmount}
                  onKeyPress={handleKeyPress}
                  onChange={handleChange}
                  required
                />
                <p className="text-left text-[#F00] font-light text-xs">
                  Only numeric values are allowed
                </p>
              </div>
              <div className="flex flex-col text-black mt-5">
                <label htmlFor="" className=" w-fit text-sm font-medium">
                  Message
                </label>
                <textarea
                  className="h-10 w-full border-gray-200 border rounded-md mt-1 outline-none px-2 min-h-[96px]"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="gap-4 flex flex-col justify-center items-center border-b mt-5">
                <button
                  type="submit"
                  className="py-4 px-6 text-lg w-full bg-black text-white rounded-md hover:bg-gray-900">
                  Send feedback
                </button>
              </div>
            </form>
          </section>
        </main>
      </div>
    </div>
  );
};

export default ErrorPage;
