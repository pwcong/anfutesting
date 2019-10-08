import React from 'react';

import service1 from '@/assets/imgs/service1.png';
import service2 from '@/assets/imgs/service2.png';
import service3 from '@/assets/imgs/service3.png';

export default class Section extends React.PureComponent {
  render() {
    const services = [
      {
        title: '电气安全检测',
        img: service1
      },
      {
        title: '消防设施安全检测',
        img: service2
      },
      {
        title: '防雷设施安全检测',
        img: service3
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
              <div className={`${servicesCls}-item`} key={index}>
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
