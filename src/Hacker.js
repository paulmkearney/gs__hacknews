import React, { useEffect, useState } from 'react';
import HackerHeader from './components/header/header';
import StoriesList from './components/list/list';
import Heading from './components/heading/heading';
import Footer from './components/footer/footer';
function Hacker() {
  return (
    <div className="App">
      <HackerHeader />
      <Heading text="Top Hacker News Stories" />
      <StoriesList />
      <Footer />
    </div>
  );
}

export default Hacker;
