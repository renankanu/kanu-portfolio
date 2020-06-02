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
          Sobre mim texto
        {/* Olá, meu nome é Renan Santos de Oliveira moro em Cianorte-PR, sou
        formado em Análise e Desenvolvimento de Sistemas. Comecei na programação
        em 2016 como desenvolvedor Android Nativo com Java, e atuava no
        Back End em Spring Boot. No final do primeiro semestre de 2019 comecei
        a programar com o PHP usando a arquitetura DDD, Android Nativo com
        Kotlin, Docker e alguns serviços da AWS(ec2, SES, SNS, SQS, RDS,
        Route53, Lambda). No segundo semestre de 2019 comecei a programar em
        React Native e estou até o momento, estudando e lendo sobre algumas
        tecnologias como: Flutter, NodeJs e me arriscando no Front End Web.
        Nas horas vagas gosto de jogar Rugby. */}
        </p>
        <Button as={AnchorLink} href="#contact">
          Contato
        </Button>
      </Details>
    </SkillsWrapper>
  </Wrapper>
);
