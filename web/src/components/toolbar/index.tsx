import React from 'react';

import qq from '@/assets/imgs/qq_icon.png';
import qqBtn from '@/assets/imgs/qq_btn.png';
import tel from '@/assets/imgs/tel_icon.png';
import mail from '@/assets/imgs/mail_icon.png';
import hide from '@/assets/imgs/hide_btn.png';

import './style.scss';

const Toolbar: React.FunctionComponent = props => {
  const baseCls = 'toolbar';
  return (
    <div className={baseCls}>
      <div className={`${baseCls}-list`}>
        <div className={`${baseCls}-item ${baseCls}-item-qq`}>
          <div
            className={`${baseCls}-item-icon`}
            style={{
              backgroundImage: `url(${qq})`
            }}
          ></div>
          <div className={`${baseCls}-item-content`}>
            <div className={`${baseCls}-item-link`}>
              <a
                href="https://wpa.qq.com/msgrd?v=3&uin=598138008&site=qq&menu=yes"
                target="_blank"
              >
                <span>黎先生：</span>
                <img src={qqBtn} />
              </a>
            </div>
          </div>
        </div>
        <div className={`${baseCls}-item ${baseCls}-item-tel`}>
          <div
            className={`${baseCls}-item-icon`}
            style={{
              backgroundImage: `url(${tel})`
            }}
          ></div>
          <div className={`${baseCls}-item-content`}>
            <div className={`${baseCls}-item-title`}>电话直呼</div>
            <div className={`${baseCls}-item-link ${baseCls}-item-link-r`}>
              <a target="_blank" href="tel:13828838681">
                黎先生：13828838681
              </a>
            </div>
          </div>
        </div>
        <div className={`${baseCls}-item ${baseCls}-item-mail`}>
          <div
            className={`${baseCls}-item-icon`}
            style={{
              backgroundImage: `url(${mail})`
            }}
          ></div>
          <div className={`${baseCls}-item-content`}>
            <div className={`${baseCls}-item-link ${baseCls}-item-link-r`}>
              <a target="_blank" href="mailto:598138008@qq.com">
                发送邮件
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={`${baseCls}-hide`}>
        <div
          className={`${baseCls}-hide-btn`}
          style={{
            backgroundImage: `url(${hide})`
          }}
        ></div>
      </div>
    </div>
  );
};

export default Toolbar;
