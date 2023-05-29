import React from 'react';
import useTitle from '../hooks/useTitle';

const Order = () => {
  useTitle("Order")

  return (
    <div className="container">
      <div className="min-h-[calc(100vh-132px)] text-5xl flex justify-center items-center">order</div>
    </div>
  );
}

export default Order;
