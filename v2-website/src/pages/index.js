import Layout from '@theme/Layout';
import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default () => {
  return (
    <Layout>
      <div className="alignCenter">
        <h1>Cómo Pienso</h1>
        <a href="https://commons.wikimedia.org/w/index.php?curid=123075">
          <img
            src={useBaseUrl('img/Portada.jpg')}
            alt="De Adrian Pingstone - Fotografía propia, Dominio público'"
          />
        </a>
        <h3>Rumiando algunas ideas</h3>
        <div>
          <a href={useBaseUrl('docs')}>Introducción</a>
        </div>
      </div>
    </Layout>
  );
};
