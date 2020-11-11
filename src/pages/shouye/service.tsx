import React from 'react';

import { withRouter, RouteComponentProps } from 'react-router-dom';

import service1 from '@/assets/imgs/service1.png';
import service2 from '@/assets/imgs/service2.png';
import service3 from '@/assets/imgs/service3.png';

class Section extends React.PureComponent<RouteComponentProps> {
  render() {
    const services = [
      {
        title: '电气安全检测',
        img: service1,
        to: '/fuwu/dianqi'
      },
      {
        title: '消防设施安全检测',
        img: service2,
        to: '/fuwu/xiaofang'
      },
      {
        title: '防雷设施安全检测',
        img: service3,
        to: '/fuwu/fanglei'
      }
    ];
    const servicesCls = 'services';
    return (
      <div className={servicesCls}>
        <div className={`${servicesCls}-wrapper`}>
          <div className={`${servicesCls}-head`}>
            <div className={`${servicesCls}-title`}>服务项目</div>
            <div className={`${servicesCls}-title-sub`}>提供专业的服务项目</div>
          </div>
          <div className={`${servicesCls}-list`}>
            {services.map((s, index) => (
              <div
                className={`${servicesCls}-item`}
                key={index}
                onClick={() => {
                  window.scrollTo(0, 0);
                  this.props.history.push(s.to);
                }}
              >
                <div
                  className={`${servicesCls}-item-img`}
                  style={{
                    backgroundImage: `url(${s.img})`
                  }}
                ></div>
                <div className={`${servicesCls}-item-title`}>{s.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Section);
