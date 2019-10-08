import React from 'react';

import { withRouter, RouteComponentProps } from 'react-router-dom';

import company from '@/assets/imgs/company.png';

const Section: React.FunctionComponent<RouteComponentProps> = props => {
  const aboutCls = 'about';

  return (
    <div className={aboutCls}>
      <div className={`${aboutCls}-wrapper`}>
        <div className={`${aboutCls}-head`}>
          <div className={`${aboutCls}-title`}>关于我们</div>
          <div className={`${aboutCls}-title-sub`}>
            惠州市安富电气消防安全检测有限公司
          </div>
        </div>
        <div className={`${aboutCls}-content`}>
          <div
            className={`${aboutCls}-left`}
            style={{
              backgroundImage: `url(${company})`
            }}
          ></div>
          <div className={`${aboutCls}-right`}>
            <div className={`${aboutCls}-right-title`}>
              惠州市安富电气消防安全检测有限公司
            </div>
            <div className={`${aboutCls}-right-content`}>
              <div>
                惠州市安富电气消防安全检测有限公司（简称“AFJT”）是惠州市消防专业领域独立的、权威的第三方检验检服务机构，致力于为客户提供全方位的建筑装饰材料的阻燃性能测试、建筑电气消防安全检测、建筑物的防雷接地装置检测、安全评估、安全标准预案工程服务。
              </div>
              <div
                className={`${aboutCls}-right-btn`}
                onClick={() => {
                  window.scrollTo(0, 0);
                  props.history.push('/jieshao');
                }}
              >
                查看详情 &gt;
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Section);
