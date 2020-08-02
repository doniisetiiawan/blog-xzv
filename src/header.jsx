import PropTypes from 'prop-types';
import React from 'react';
import { useTheme } from './hooks';

const Header = ({ text }) => {
  const { primaryColor } = useTheme();
  return <h1 style={{ color: primaryColor }}>{text}</h1>;
};

export default Header;

Header.propTypes = {
  text: PropTypes.string,
};

Header.defaultProps = {
  text: 'Hello World',
};
