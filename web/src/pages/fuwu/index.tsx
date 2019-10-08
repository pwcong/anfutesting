import React from 'react';

import {
  Switch,
  Route,
  Redirect,
  withRouter,
  RouteComponentProps
} from 'react-router-dom';

import Tabs from '@/components/tabs';

import banner from '@/assets/imgs/banner1.jpg';
import DianQi from './dianqi';
import XiaoFang from './xiaofang';
import FangLei from './fanglei';

import './style.scss';

export interface IProps extends RouteComponentProps {}

const Page: React.FunctionComponent<IProps> = props => {
  const baseCls = 'fuwu';

  const tabs = [
    {
      key: '/fuwu/dianqi',
      title: '电气设备检测'
    },
    {
      key: '/fuwu/xiaofang',
      title: '消防设备检测'
    },
    {
      key: '/fuwu/fanglei',
      title: '防雷检测'
    }
  ];

  return (
    <div className={baseCls}>
      <div className={`${baseCls}-wrapper`}>
        <div
          className={`${baseCls}-banner`}
          style={{
            backgroundImage: `url(${banner})`
          }}
        ></div>
        <div className={`${baseCls}-tabs`}>
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
        <div className={`${baseCls}-content`}>
          <Switch>
            <Redirect exact={true} path="/fuwu" to="/fuwu/dianqi" />
            <Route path="/fuwu/dianqi" component={DianQi} />
            <Route path="/fuwu/xiaofang" component={XiaoFang} />
            <Route path="/fuwu/fanglei" component={FangLei} />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Page);
