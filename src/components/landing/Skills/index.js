import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Container } from '../../common/Button/index';
import { Button } from '../../common/Button/index';
import dev from '../../../assets/illustrations/skills.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const Skills = () => (
  <Wrapper id="about">
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <img src={dev} alt="I’m Renan" />
      </Thumbnail>
      <Details>
        <h1>Um pouco sobre mim  </h1>
        <p>
        Olá, meu nome é Renan Santos de Oliveira moro em Cianorte-PR, jogador de Rugby por paixão. Sou
        formado em Análise e Desenvolvimento de Sistemas. Comecei na programação
        em 2016 como desenvolvedor Android Nativo com Java, e atuava no
        Back End em Spring Boot. No final do primeiro semestre de 2018 comecei
        a programar com o PHP usando a arquitetura DDD, Android Nativo com
        Kotlin, Docker e alguns serviços da AWS(ec2, SES, SNS, SQS, RDS,
        Route53, Lambda). No segundo semestre de 2019 comecei a programar em
        React Native e estou até o momento. Estudando e lendo sobre Flutter, NodeJs e me arriscando no Front End Web.
        </p>
      </Details>
    </SkillsWrapper>
  </Wrapper>
);
