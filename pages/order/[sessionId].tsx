import React, { FC } from 'react';
import { GetServerSideProps } from 'next';
import Image from 'next/image';
import axios from 'axios';
import shirt from '../../public/shirt.png';
import map from '../../public/map.svg';
import Link from 'next/link';
import { generateId } from '../../utils';
type OrderPageProps = {
  email: string;
  id: number;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { sessionId } = context.params;
  try {
    const response = await axios.get(`http://localhost:3000/api/session?sessionId=${sessionId}`);
    const session = response.data;
    const email = session.customer_details.email;
    return { props: { email, id: generateId() } };
  } catch (error) {
    console.error('Error fetching session:', error);
    return { notFound: true };
  }
};

const OrderPage: FC<OrderPageProps> = ({ email, id }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div>
        <div className="fixed inset-0 overflow-hidden opacity-75 bg-[#f8fafb]">
          <Image alt="World Map" src={map} layout="fill" objectFit="cover" quality={100} />
        </div>
        <main className="relative flex flex-col items-center flex-1  sm:p-0 text-center z-10 w-full px-2">
          <h1 className="text-3xl sm:text-5xl font-bold">Success!</h1>
          <p className="mt-4 sm:text-xl text-lg text-gray-700">
            Be patient and your order will arrive soon
          </p>
          <section className="border border-gray-300 bg-white rounded-lg shadow-lg mt-16 w-full hover:shadow-2xl transition sm:w-[400px]">
            <div className="pt-7">
              <div className="ml-4 mr-auto text-left ">
                <h4 className="font-semibold text-xl">Order No. {id}</h4>
              </div>
            </div>
            <div className="text-left ml-4 mt-5 mb-1 ">
              <div className="flex items-center gap-3">
                <Image
                  alt="Black shirt with white logo"
                  src={shirt}
                  placeholder="blur"
                  layout="fixed"
                  className="block h-[75px] w-[75px] border-gray-200 rounded-md border"
                />
                <h4 className="text-base font-semibold">Alpha Black shirt</h4>
              </div>
            </div>
            <div className="p-4 gap-4 flex flex-col justify-center items-center border-b">
              <div className="bg-gray-50 text-black text-left  rounded-md border-gray-200 border text-sm p-4 w-full">
                <p className="inline-block font-normal ">
                  A tracking number for your item will be sent to <br />
                  your email <b className="font-bold">{email}</b>
                </p>
              </div>
              <Link
                href="/"
                className="py-4 px-6 text-lg w-full bg-black text-white rounded-md hover:bg-gray-900">
                Back to main page
              </Link>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default OrderPage;
