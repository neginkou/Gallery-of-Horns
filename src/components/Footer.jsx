import React from 'react';
import PropTypes from 'prop-types';
import style from './footer.module.css';

function Footer(props) {
  return (
    <footer>{props.content}</footer>
  );
}

Footer.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Footer;