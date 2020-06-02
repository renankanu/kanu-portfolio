import React from 'react';
import { Link } from 'gatsby';
import { Container } from '../../../common/Container/index';
import NavbarLinks from '../NavbarLinks';
import { Wrapper } from './styles';

const Navbar = () => (
  <Wrapper as={Container}>
    <Link to="/">Renan Kanu</Link>
    <NavbarLinks desktop />
  </Wrapper>
);

export default Navbar;
