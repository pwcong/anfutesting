import React from 'react';

import xs1 from '@/assets/imgs/xs1.jpg';
import xs2 from '@/assets/imgs/xs2.jpg';
import xs3 from '@/assets/imgs/xs3.jpg';
import xs4 from '@/assets/imgs/xs4.jpg';
import xs5 from '@/assets/imgs/xs5.jpg';
import xs6 from '@/assets/imgs/xs6.jpg';
import xs7 from '@/assets/imgs/xs7.jpg';
import xs8 from '@/assets/imgs/xs8.jpg';
import xs9 from '@/assets/imgs/xs9.jpg';
import xs10 from '@/assets/imgs/xs10.jpg';
import xs11 from '@/assets/imgs/xs11.jpg';
import xs12 from '@/assets/imgs/xs12.jpg';
import xs13 from '@/assets/imgs/xs13.jpg';

const Section: React.FunctionComponent = () => {
  const baseCls = 'xiaofang';

  const xss = [
    {
      img: xs1,
      title: '钢卷尺'
    },
    {
      img: xs2,
      title: '温湿度计'
    },
    {
      img: xs3,
      title: '插座测试仪'
    },
    {
      img: xs4,
      title: '红外热成像仪'
    },
    {
      img: xs5,
      title: '绝缘电阻测试仪'
    },
    {
      img: xs6,
      title: '漏电开关测试仪'
    },
    {
      img: xs7,
      title: '交直流钳形电流表'
    },
    {
      img: xs8,
      title: '数字风速计'
    },
    {
      img: xs9,
      title: '数字万用表'
    },
    {
      img: xs10,
      title: '接地电阻测试仪'
    },
    {
      img: xs11,
      title: '坡度尺'
    },
    {
      img: xs12,
      title: '激光测距仪'
    },
    {
      img: xs13,
      title: '工具箱'
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
