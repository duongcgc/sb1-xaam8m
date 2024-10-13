import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import PageTransition from '../components/PageTransition';

const Home = () => {
  return (
    <PageTransition>
      <div>
        <Hero />
        <Services />
        <Portfolio />
      </div>
    </PageTransition>
  );
};

export default Home;