import Navbar from '../components/Navbar';
import AdditionalComponent from '../components/AdditionalComponent';
import React from 'react';
import Head from 'next/head';
import Howitwork from '@/components/Howitwork';
import HelpComponent from '@/components/HelpComponent';
import Popular from '@/components/Popular'
import Recently from '@/components/Recently'

const Home = () => {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Home page</title>
      </Head>
      <Navbar />
      <AdditionalComponent /> 
      <Howitwork/>
      <HelpComponent/>
      <Popular/>
      <Recently/>
    </div>
  );
};

export default Home;