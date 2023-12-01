import React, { useState } from 'react';
import Header from './components/Header.jsx';
import Gallery from './components/Gallery.jsx';
import Footer from './components/Footer.jsx';
import gallery from './assets/beasts.json';
import SelectedBeast from './components/SelectedBeasts.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [headerText, setHeaderText] = useState('Welcome to the Beast Gallery');
  const [footerText, setFooterText] = useState('© 2023 Beast Gallery');
  const [selectedBeast, setSelectedBeast] = useState(null);

  const handleImageClick = (beast) => {
    setSelectedBeast(beast);
  };

  const handleHeaderClick = () => {
    setHeaderText('🎉 You clicked the header! 🎉');
  };

  const handleFooterClick = () => {
    setFooterText('🚀 Thanks for exploring the Beast Gallery! 🚀');
  };

  <input
  type="text"
  placeholder="Search images by title or keyword"
  onChange={(e) => handleSearch(e.target.value)}
/>

  return (
    <main>
      <Header title={headerText} beastGallery={gallery.length} onClick={handleHeaderClick} />
      <Gallery list={gallery} onImageClick={handleImageClick}/>
      <Footer content={footerText} onClick={handleFooterClick} />

      <div>
        <SelectedBeast selectedBeast={selectedBeast} />
      </div>
    </main>
  );
};

export default App;