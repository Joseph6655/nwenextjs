import React from 'react';
import Navbar from '../components/Navbar';
import AdditionalComponent from '../components/AdditionalComponent';
import Head from 'next/head';
import Howitwork from '@/components/Howitwork';
import HelpComponent from '@/components/HelpComponent';
import Popular from '@/components/Popular';
import Recently from '@/components/Recently';

const Home = () => {
  const recentlyAddedJobs = [
    {
      title: "UI/UX Designer",
      image: "Rone.png",
      company: "Dimension Studio",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Sed quis lacus non orci euismod vestibulum vitae ut ex, Quisque ut arcu at lectus tristique auctor sit amet at turpis.",
      location: "San Fransisco, CA",
      type: "Full Time"
    },
    {
      title: "Full Stack Developer",
      image: "Rtwo.png",
      company: "Alpander",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Sed quis lacus non orci euismod vestibulum vitae ut ex, Quisque ut arcu at lectus tristique auctor sit amet at turpis.",
      location: "San Fransisco, CA",
      type: "Full Time"
    },
    {
      title: "Product Designer",
      image: "Rthree.png",
      company: "XReact Tech",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Sed quis lacus non orci euismod vestibulum vitae ut ex, Quisque ut arcu at lectus tristique auctor sit amet at turpis.",
      location: "San Fransisco, CA",
      type: "Full Time"
    }
  ];

  return (
    <div className="bg-gray-100">
      <Head>
        <title>Home page</title>
      </Head>
      <Navbar />
      <AdditionalComponent 
        title="Search, Find, & Apply"
        text="lorem ipsum dolor sit amet, consectetur adipiscing elit, Sed quis lacus non orci euismod vestibulum vitae ut ex, Quisque ut arcu at lectus tristique auctor sit amet at turpis.."
        location="Location"
      /> 
      <Howitwork 
          title="How it works" 
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, Sed quis lacus non orci euismod vestibulum vitae ut ex, Quisque ut arcu at lectus tristique auctor sit amet at turpis." 
          buttonText="Learn More"
/>
      <HelpComponent 
         title="We will help you to become an employee in your dream company" 
         description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, Sed quis lacus non orci euismod vestibulum vitae ut ex, Quisque ut arcu at lectus tristique auctor sit amet at turpis." 
         buttonText="Learn More"
      />
      <Popular 
        title="Popular Job Categories"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, Sed quis lacus non orci euismod vestibulum vitae ut ex, Quisque ut arcu at lectus tristique auctor sit amet at turpis."
        jobs={[
          {
            title: "Design and Development",
            image: "pfirst.png",
            vacancy: 350
          },
          {
            title: "Accounting and Finance",
            image: "pone.png",
            vacancy: 350
          },
          {
            title: "Bank Institution",
            image: "ptwo.png",
            vacancy: 350
          },
          {
            title: "Product Managemen",
            image: "pthree.png",
            vacancy: 350
          },
          {
            title: "Accounting and Finance",
            image: "pone.png",
            vacancy: 350
          },
          
        ]}
        
      />
      <Recently 
        title="Recently Added Jobs"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, Sed quis lacus non orci euismod vestibulum vitae ut ex, Quisque ut arcu at lectus tristique auctor sit amet at turpis."
        jobs={recentlyAddedJobs}
      />
    </div>
  );
};

export default Home;