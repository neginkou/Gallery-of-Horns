import React, { useState } from 'react';
import Header from './components/Header.jsx';
import Gallery from './components/Gallery.jsx';
import Footer from './components/Footer.jsx';
import gallery from './assets/beasts.json';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [headerText, setHeaderText] = useState('Welcome to the Beast Gallery');
  const [footerText, setFooterText] = useState('© 2023 Beast Gallery');

  const handleHeaderClick = () => {
    setHeaderText('🎉 You clicked the header! 🎉');
  };

  const handleFooterClick = () => {
    setFooterText('🚀 Thanks for exploring the Beast Gallery! 🚀');
  };

  return (
    <main>
      <Header title="Gallery of Horns" beastGallery={gallery.length} onClick={handleHeaderClick} />
      <Gallery list={gallery} />
      <Footer content="&copy; 2023 Negin Koushkakinejad" onClick={handleFooterClick} />
    </main>
  );
};

export default App;