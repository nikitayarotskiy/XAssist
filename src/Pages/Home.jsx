import React, { useEffect, useState } from 'react';

// Components
import Header from '../Components/Header.jsx';
import TawkToChat from '../Components/TawkToChat';
import Hero from '../Components/Hero.jsx';
import FeaturesPage from '../Components/Features.jsx';
import PricingPage from '../Components/Pricing.jsx';

function Home() {
  
  return (
<div className="App flex flex-col h-full bg-base-100 w-full overflow-x-hidden text-center">
<Header />
      {/* <TawkToChat /> */}
        <Hero />
        <FeaturesPage />
        {/* <PricingPage /> */}
    </div>
  );
}

export default Home;