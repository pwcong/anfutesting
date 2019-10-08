import React from 'react';

import dq1 from '@/assets/imgs/dq1.jpg';
import dq2 from '@/assets/imgs/dq2.jpg';
import dq3 from '@/assets/imgs/dq3.jpg';
import dq4 from '@/assets/imgs/dq4.jpg';
import dq5 from '@/assets/imgs/dq5.jpg';
import dq6 from '@/assets/imgs/dq6.jpg';
import dq7 from '@/assets/imgs/dq7.jpg';
import dq8 from '@/assets/imgs/dq8.jpg';
import dq9 from '@/assets/imgs/dq9.jpg';

const Section: React.FunctionComponent = () => {
  const baseCls = 'dianqi';

  const xss = [
    {
      img: dq1,
      title: '温湿度计'
    },
    {
      img: dq2,
      title: '插座测试仪'
    },
    {
      img: dq3,
      title: '红外热成像仪'
    },
    {
      img: dq4,
      title: '绝缘电阻测试仪'
    },
    {
      img: dq5,
      title: '漏电开关测试仪'
    },
    {
      img: dq6,
      title: '交直流钳形电流表'
    },
    {
      img: dq7,
      title: '数字风速计'
    },
    {
      img: dq8,
      title: '数字万用表'
    },
    {
      img: dq9,
      title: '接地电阻测试仪'
    }
  ];

  return (
    <div className={baseCls}>
      <div className={`${baseCls}-list`}>
        {xss.map((xs, index) => (
          <div key={index} className={`${baseCls}-item`}>
            <div
              className={`${baseCls}-item-img`}
              style={{ backgroundImage: `url(${xs.img})` }}
            ></div>
            <div className={`${baseCls}-item-title`}>{xs.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section;
