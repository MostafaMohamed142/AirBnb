import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import Data from './Data';
import Footer from './components/Footer';

export default function App() {
  const cards = Data.map(item => {
    return (
        <Card 
        key={item.id}
        item={item}
        />
    )
})   
  return (
    <div>
    <Navbar />
    <Hero />
          <section className="cards-list">
                {cards}
            </section>
    <Footer />
    </div>
  );
}


