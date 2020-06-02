import React from 'react';
import { Helmet } from 'react-helmet'

import { Layout } from '../components/common/Layout/index';

export default () => {
  return (
    <Layout>
      <div>Teste</div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{`<RenanKanu>`}</title>
      </Helmet>
    </Layout>
  )
}
