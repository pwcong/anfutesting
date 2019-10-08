import React from 'react';

import { withRouter, RouteComponentProps, NavLink } from 'react-router-dom';
import classnames from 'classnames';

import './style.scss';

const Footer: React.FunctionComponent<RouteComponentProps> = () => {
  const topCols = [
    [
      {
        to: '/jieshao',
        title: '公司介绍',
        isTitle: true
      },
      {
        to: '/jieshao/qiye',
        title: '企业简介'
      },
      {
        to: '/jieshao/fengcai',
        title: '我们的风采'
      }
    ],
    [
      {
        to: '/zizhi',
        title: '荣誉资质',
        isTitle: true
      }
    ],
    [
      {
        to: '/fuwu',
        title: '服务项目',
        isTitle: true
      },
      {
        to: '/fuwu/dianqi',
        title: '电器设备检测'
      },
      {
        to: '/fuwu/xiaofang',
        title: '消防设备检测'
      },
      {
        to: '/fuwu/fanglei',
        title: '防雷检测'
      }
    ],
    [
      {
        to: '/anli',
        title: '成功案例',
        isTitle: true
      }
    ],
    [
      {
        to: '/shebei',
        title: '检测设备',
        isTitle: true
      },
      {
        to: '/shebei/xiaofang',
        title: '消防检测设备'
      },
      {
        to: '/shebei/dianqi',
        title: '电器检测设备'
      }
    ],
    [
      {
        to: '/lianxi',
        title: '关于我们',
        isTitle: true
      }
    ]
  ];

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-top-wrapper">
          <div className="footer-top-left"></div>
          <div className="footer-top-right">
            {topCols.map((col, index) => (
              <div className="footer-top-col" key={`col-${index}`}>
                {col.map((item, _index) => (
                  <NavLink
                    className={classnames('footer-top-item', {
                      ['footer-top-item-title']: item.isTitle
                    })}
                    key={`item-${_index}`}
                    to={item.to}
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                  >
                    {item.title}
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-wrapper">
          <div>
            @2017-{new Date().getFullYear()} 惠州市安富电气消防安全检测有限公司
          </div>
        </div>
      </div>
    </footer>
  );
};

export default withRouter(Footer);
