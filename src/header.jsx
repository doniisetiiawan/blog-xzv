import PropTypes from 'prop-types';
import React, { useContext } from 'react';
// eslint-disable-next-line import/no-cycle
import { ThemeContext } from './App';

function Header({ text }) {
  const theme = useContext(ThemeContext);

  return <h1 style={{ color: theme.primaryColor }}>{text}</h1>;
}

export default Header;

Header.propTypes = {
  text: PropTypes.string,
};

Header.defaultProps = {
  text: 'Hello World',
};
