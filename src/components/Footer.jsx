import React from 'react';
import PropTypes from 'prop-types';

function Footer(props) {
  return (
    <footer>{props.content}</footer>
  );
}

Footer.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Footer;