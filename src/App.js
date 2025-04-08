import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Modal from './components/Modal';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Function to dynamically import all images from a directory
const importImages = (requireContext) => {
  const images = {};
  requireContext.keys().forEach((key) => {
    const category = key.split('/')[1]; // Extract category from path
    if (!images[category]) {
      images[category] = [];
    }
    images[category].push(requireContext(key));
  });
  return images;
};

// Dynamically load images from the assets/images directory
const productImages = importImages(
  require.context('./assets/images', true, /\.(png|jpe?g|svg)$/)
);

const App = () => {
  const [modalImages, setModalImages] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (productTitle) => {
    setModalImages(productImages[productTitle] || []);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Products onCardClick={handleCardClick} />
      <Contact />
      <Footer />
      {isModalOpen && <Modal images={modalImages} onClose={handleCloseModal} />}
    </div>
  );
};

export default App;