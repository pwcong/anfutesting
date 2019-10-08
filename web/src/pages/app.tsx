import React from 'react';
import { Route } from 'react-router-dom';

import Header from '../components/header';
import Footer from '../components/footer';

import ShouYe from './shouye';
import JieShao from './jieshao';
import ZiZhi from './zizhi';
import FuWu from './fuwu';
import AnLi from './anli';
import SheBei from './shebei';
import LianXi from './lianxi';

import './style.scss';

const App: React.FunctionComponent = () => {
  return (
    <div className="container">
      <Header />
      <main className="main">
        <Route exact path="/" component={ShouYe} />
        <Route path="/jieshao" component={JieShao} />
        <Route path="/zizhi" component={ZiZhi} />
        <Route path="/fuwu" component={FuWu} />
        <Route path="/anli" component={AnLi} />
        <Route path="/shebei" component={SheBei} />
        <Route path="/lianxi" component={LianXi} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
