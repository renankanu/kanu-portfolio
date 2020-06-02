import React from 'react';
import { Helmet } from 'react-helmet'
import {Title, Wrapper} from './style'
import GlobalStyle from './global-style'

export default function Home() {
  return (
    <>
      <GlobalStyle/>
      <Wrapper>
      <Title>Renan Kanu</Title>
      </Wrapper>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{`<RenanKanu>`}</title>
      </Helmet>
    </>
  )
}
