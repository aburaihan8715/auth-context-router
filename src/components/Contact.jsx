import React from 'react';
import useTitle from '../hooks/useTitle';

const Contact = () => {
  useTitle("Contact")
  return (
    <div className="container">
      <div className="min-h-[calc(100vh-132px)] text-5xl flex justify-center items-center">contact</div>
    </div>
  );
}

export default Contact;
