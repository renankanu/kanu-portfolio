import React from 'react';
import { Container } from '../../../components/common/Container/index';
import { Wrapper, Flex, Details } from './styles';

export const Footer = () => (
  <Wrapper>
    <Flex as={Container}>
      <Details>
        <div>
          <span>
            © All rights are reserved | {new Date().getFullYear()} | Made with{' '}
            by{' '}
            RenanKanu
          </span>
        </div>
      </Details>
    </Flex>
  </Wrapper>
);
