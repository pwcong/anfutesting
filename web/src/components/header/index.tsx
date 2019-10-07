import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import logo from '@/assets/imgs/logo.jpg';
import { judgeIsMobile } from '@/utils/screen';

import './style.scss';

const Header: React.FunctionComponent = () => {
  const [isMobile, setIsMobile] = useState(judgeIsMobile());
  const [expand, setExpand] = useState(false);

  const handleResize = () => {
    setIsMobile(judgeIsMobile());
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  const navs = [
    {
      title: '首页',
      to: '/',
      exact: true
    },
    {
      title: '公司介绍',
      to: '/jieshao',
      children: [
        {
          title: '企业简介',
          to: '/qiye',
          exact: true
        },
        {
          title: '我们的风采',
          to: '/fengcai',
          exact: true
        }
      ]
    },
    {
      title: '荣誉资质',
      to: '/zizhi'
    },
    {
      title: '服务项目',
      to: '/fuwu',
      children: [
        {
          title: '电气设备检测',
          to: '/dianqi',
          exact: true
        },
        {
          title: '消防设备检测',
          to: '/xiaofang',
          exact: true
        },
        {
          title: '防雷检测',
          to: '/fanglei',
          exact: true
        }
      ]
    },
    {
      title: '成功案例',
      to: '/anli'
    },
    {
      title: '检测设备',
      to: '/shebei',
      children: [
        {
          title: '消防检测设备',
          to: '/xiaofang',
          exact: true
        },
        {
          title: '电气检测设备',
          to: '/dianqi',
          exact: true
        }
      ]
    },
    {
      title: '关于我们',
      to: '/lianxi'
    }
  ];

  return (
    <header className="header">
      <div className="header-wrapper">
        <div className="logo">
          <img src={logo} />
        </div>
        {isMobile ? (
          <div
            className={['navs-mobile']
              .concat(expand ? ['navs-mobile-active'] : [])
              .join(' ')}
          >
            {navs.map((nav, index) => (
              <div key={index} className="nav-mobile">
                <NavLink
                  key={nav.to}
                  exact={nav.exact}
                  to={nav.to}
                  title={nav.title}
                  className="nav-mobile-link"
                  onClick={() => {
                    setExpand(false);
                  }}
                >
                  {nav.title}
                </NavLink>
                {nav.children && (
                  <div className="sub-navs-mobile">
                    {nav.children.map((_nav, _index) => (
                      <NavLink
                        className="sub-nav-mobile-link"
                        key={_index}
                        title={_nav.title}
                        exact={_nav.exact}
                        to={`${nav.to}${_nav.to}`}
                        onClick={() => {
                          setExpand(false);
                        }}
                      >
                        {_nav.title}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="navs">
            {navs.map((nav, index) => (
              <div className="nav" key={index}>
                <NavLink
                  key={nav.to}
                  exact={nav.exact}
                  to={nav.to}
                  title={nav.title}
                  className="nav-link"
                >
                  {nav.title}
                </NavLink>
                {nav.children && (
                  <div className="sub-navs">
                    {nav.children.map((_nav, _index) => (
                      <NavLink
                        className="sub-nav-link"
                        key={_index}
                        title={_nav.title}
                        exact={_nav.exact}
                        to={`${nav.to}${_nav.to}`}
                      >
                        {_nav.title}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {isMobile && (
          <div
            className={['navs-mobile-expand']
              .concat(expand ? ['navs-mobile-expand-active'] : [])
              .join(' ')}
            onClick={() => {
              setExpand(!expand);
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
