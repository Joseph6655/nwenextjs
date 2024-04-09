import Navbar from '../components/Navbar';
import AdditionalComponent from '../components/AdditionalComponent';
import React from 'react';
import Head from 'next/head';
import Howitwork from '@/components/Howitwork';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Home page</title>
      </Head>
      <Navbar />
      <AdditionalComponent /> 
      <Howitwork/>
    </div>
  );
};

export default Home;