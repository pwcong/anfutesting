import React from 'react';

import banner from '@/assets/imgs/banner4.jpg';

import './style.scss';

export interface IProps {}

const Page: React.FunctionComponent<IProps> = props => {
  const baseCls = 'lianxi';

  return (
    <div className={baseCls}>
      <div className={`${baseCls}-wrapper`}>
        <div
          className={`${baseCls}-banner`}
          style={{
            backgroundImage: `url(${banner})`
          }}
        ></div>

        <div className={`${baseCls}-content`}>
          <div className={`${baseCls}-location`}>
            <div
              className={`${baseCls}-location-left`}
              style={{
                backgroundImage: `url(https://restapi.amap.com/v3/staticmap?location=114.480437,22.975667&zoom=16&size=550*450&markers=mid,,A:114.480437,22.975667&key=4b6550da95e84a1f7faed4993457d2cf)`
              }}
            ></div>
            <div className={`${baseCls}-location-right`}>
              <div className={`${baseCls}-location-item`}>
                惠州市安富电气消防安全检测有限公司
              </div>
              <div className={`${baseCls}-location-item`}>
                地址：惠州市惠澳大道惠南产业园华泰南路2号科技创业中心1号楼520室
              </div>
              <div className={`${baseCls}-location-item`}>
                手机：13828838681 黎先生
              </div>
              <div className={`${baseCls}-location-item`}>Q Q：598138008</div>
              <div className={`${baseCls}-location-item`}>
                邮箱：598138008@qq.com
              </div>
              <div className={`${baseCls}-location-item`}>
                网站：www.anfutesting.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
