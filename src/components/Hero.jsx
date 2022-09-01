import React from 'react';
import PropTypes from 'prop-types';
import { EthereumIcon } from '../assets/icons/Icons';

const Hero = ({ title, subtitle }) => {
  console.log(title, subtitle);
  return (
    <div className="hero-container">
      <EthereumIcon />
      <div className="title-wrapper">
        <h2>{title}</h2>
        <h6>{subtitle}</h6>
      </div>
    </div>
  );
};

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default Hero;
