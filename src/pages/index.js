import React from 'react';
import { Helmet } from 'react-helmet'

import { Layout } from '../components/common/Layout/index';
import { Intro } from '../components/landing/Intro/index';
import { Projects } from '../components/landing/Projects/index';
import { Skills } from '../components/landing/Skills/index';

export default () => {
  return (
    <Layout>
      <Intro />
      <Skills />
      <Projects />
      <Helmet>
        <meta charSet="utf-8" />
        <title>{`<RenanKanu>`}</title>
      </Helmet>
    </Layout>
  )
}
