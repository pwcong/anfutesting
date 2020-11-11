import React from 'react';

import Banner from './banner';
import Service from './service';
import Demo from './demo';
import Reason from './reason';
import About from './about';

import './style.scss';

const Page: React.FunctionComponent = props => {
  return (
    <section className="shouye">
      <Banner />
      <Service />
      <Demo />
      <Reason />
      <About />
    </section>
  );
};

export default Page;
