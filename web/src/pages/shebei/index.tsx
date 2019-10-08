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
import XiaoFang from './xiaofang';
import DianQi from './dianqi';

import './style.scss';

export interface IProps extends RouteComponentProps {}

const Page: React.FunctionComponent<IProps> = props => {
  const baseCls = 'shebei';

  const tabs = [
    {
      key: '/shebei/xiaofang',
      title: '消防检测设备'
    },
    {
      key: '/shebei/dianqi',
      title: '电气检测设备'
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
            <Redirect exact={true} path="/shebei" to="/shebei/xiaofang" />
            <Route path="/shebei/xiaofang" component={XiaoFang} />
            <Route path="/shebei/dianqi" component={DianQi} />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Page);
