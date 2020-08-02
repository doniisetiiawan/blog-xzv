import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { ThemeContext } from './themeContext';

const Header = ({ text }) => {
  const { primaryColor } = useContext(ThemeContext);
  return <h1 style={{ color: primaryColor }}>{text}</h1>;
};

export default Header;

Header.propTypes = {
  text: PropTypes.string,
};

Header.defaultProps = {
  text: 'Hello World',
};
