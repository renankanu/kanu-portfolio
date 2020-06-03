import React from 'react';
import { Link } from 'gatsby';
import { Container } from '../../../common/Container/index';
import NavbarLinks from '../NavbarLinks';
import { Wrapper, MyName } from './styles';

const Navbar = () => (
  <Wrapper as={Container}>
    <Link to="/">
      <MyName>
        Renan Kanu
      </MyName>
    </Link>
    <NavbarLinks desktop />
  </Wrapper>
);

export default Navbar;
