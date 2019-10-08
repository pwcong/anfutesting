import React from 'react';

import Banner from './banner';
import Service from './service';
import Demo from './demo';

import './style.scss';

const Page: React.FunctionComponent = props => {
  return (
    <section className="shouye">
      <Banner />
      <Service />
      <Demo />
    </section>
  );
};

export default Page;
