import React from 'react';
import { Container } from '../../../components/common/Container/index';
import { Wrapper, Spacer, Stats, Links } from './styles';
import insta from '../../../assets/icons/insta.svg'
import linkedin from '../../../assets/icons/linkedin.svg'
import facebook from '../../../assets/icons/facebook.svg'
import github from '../../../assets/icons/github.svg'

export const Contact = () => {
  return (
    <Wrapper as={Container} id="contact">
      <h2>Contatos</h2>
      <Stats>
        <Links>
          <a key={1} href={'https://www.instagram.com/renankanu/'} target="_blank" rel="noopener noreferrer">
            <img width="24" src={insta} alt={name} />
          </a>
        </Links>
        <Spacer />
        <Links>
          <a key={2} href={'https://www.linkedin.com/in/renansantosbr/'} target="_blank" rel="noopener noreferrer">
            <img width="24" src={linkedin} alt={name} />
          </a>
        </Links>
        <Spacer />
          <Links>
            <a key={2} href={'https://www.facebook.com/renan.santos.92123'} target="_blank" rel="noopener noreferrer">
              <img width="24" src={facebook} alt={name} />
            </a>
          </Links>
        <Spacer />
        <Links>
            <a key={2} href={'https://github.com/renankanu'} target="_blank" rel="noopener noreferrer">
              <img width="24" src={github} alt={name} />
            </a>
          </Links>
      </Stats>

    </Wrapper>
  );
};
