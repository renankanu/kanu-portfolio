import React from 'react';
import { Global } from './styles';
import './fonts.css';
import { Footer } from '../../theme/Footer';

export const Layout = ({ children }) => (
  <>
    <Global />
    {children}
    <Footer />
  </>
);
