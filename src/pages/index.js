import Navbar from '../components/Navbar';
import AdditionalComponent from '../components/AdditionalComponent';
import React from 'react';
import Head from 'next/head';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Home page</title>
      </Head>
      <Navbar />
      <AdditionalComponent /> 
    </div>
  );
};

export default Home;