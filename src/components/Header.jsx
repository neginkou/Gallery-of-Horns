import React, {useState} from 'react';
import styles from './header.module.css' 

function Header(props) {
    const [isVisible, setIsVisible] = useState(true);
  
    const handleClick = () => {
      setIsVisible(!isVisible);
    };
  if (isVisible){
    return (
      <header className={styles.hdr} onClick={handleClick}>
        <h1>{props.title}</h1>
        <div>We have {props.beastGallery} to look through</div>
      </header>
      );
  } else {
    return null;
  }
  }
  export default Header;
