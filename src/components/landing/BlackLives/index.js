import React from 'react';
import { Container } from '../../../components/common/Container/index';
import { Wrapper, Stats, Thumbnail, Text } from './styles';
import blm from '../../../assets/illustrations/blm.svg'

export const BlackLives = () => {
  return (
    <Wrapper as={Container} id="black-lives">
      <Stats>
        <Thumbnail>
          <img src={blm} alt="I’m Renan"/>
        </Thumbnail>
      </Stats>
      <Text>Black Lives Matter</Text>
    </Wrapper>
  );
};
