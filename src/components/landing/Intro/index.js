import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Header } from '../../theme/Header/index';
import {  Button } from '../../common/Button/index';
import { Container } from '../../common/Container/index';
import dev from '../../../assets/illustrations/dev.svg';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';

export const Intro = () => (
  <Wrapper>
    <Header />
    <IntroWrapper as={Container}>
      <Details>
        <h1>Olá Visitante!</h1>
        <h4>Eu sou Renan, Desenvolvedor Mobile!</h4>
        <Button as={AnchorLink} href="#contact">
          Contato
        </Button>
      </Details>
      <Thumbnail>
        <img src={dev} alt="I’m John and I’m a JAMStack engineer!" />
      </Thumbnail>
    </IntroWrapper>
  </Wrapper>
);
