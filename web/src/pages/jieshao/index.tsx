import React from 'react';

import {
  Switch,
  Route,
  Redirect,
  withRouter,
  RouteComponentProps
} from 'react-router-dom';

import Tabs from '@/components/tabs';

import banner from '@/assets/imgs/banner4.jpg';
import QiYe from './qiye';
import FengCai from './fengcai';

import './style.scss';

export interface IProps extends RouteComponentProps {}

const Page: React.FunctionComponent<IProps> = props => {
  const jieshaoCls = 'jieshao';

  const tabs = [
    {
      key: '/jieshao/qiye',
      title: '企业简介'
    },
    {
      key: '/jieshao/fengcai',
      title: '我们的风采'
    }
  ];

  return (
    <div className={jieshaoCls}>
      <div className={`${jieshaoCls}-wrapper`}>
        <div
          className={`${jieshaoCls}-banner`}
          style={{
            backgroundImage: `url(${banner})`
          }}
        ></div>
        <div className={`${jieshaoCls}-tabs`}>
          <Tabs
            data={tabs.map(t =>
              Object.assign({}, t, {
                active: props.history.location.pathname === t.key
              })
            )}
            onSelect={key => {
              window.scrollTo(0, 0);
              props.history.push(key);
            }}
          />
        </div>
        <div className={`${jieshaoCls}-content`}>
          <Switch>
            <Redirect exact={true} path="/jieshao" to="/jieshao/qiye" />
            <Route path="/jieshao/qiye" component={QiYe} />
            <Route path="/jieshao/fengcai" component={FengCai} />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Page);
