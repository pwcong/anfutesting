import React, { useState } from 'react';
import classnames from 'classnames';

import qq from '@/assets/imgs/qq_icon.png';
import qqBtn from '@/assets/imgs/qq_btn.png';
import tel from '@/assets/imgs/tel_icon.png';
import mail from '@/assets/imgs/mail_icon.png';
// import hide from '@/assets/imgs/hide_btn.png';

import './style.scss';

let timer

const Toolbar: React.FunctionComponent = (props) => {
  const [ activeKey, setActiveKey ] = useState('');

  const show = (key: string) => {
    setActiveKey(key);
    clearTimeout(timer)
    timer = setTimeout(() => setActiveKey(''), 5000)
  };

  const baseCls = 'toolbar';
  const itemCls = `${baseCls}-item`;

  return (
    <div className={baseCls}>
      <div className={`${baseCls}-list`}>
        <div
          className={classnames(`${itemCls} ${itemCls}-qq`, {
            [`${itemCls}-active`]: activeKey === 'qq'
          })}
          onMouseEnter={() => show('qq')}
          onClick={() => show('qq')}
        >
          <div
            className={`${itemCls}-icon`}
            style={{
              backgroundImage: `url(${qq})`
            }}
          />
        </div>
        <div
          className={classnames(`${itemCls} ${itemCls}-tel`, {
            [`${itemCls}-active`]: activeKey === 'tel'
          })}
          onMouseEnter={() => show('tel')}
          onClick={() => show('tel')}
        >
          <div
            className={`${itemCls}-icon`}
            style={{
              backgroundImage: `url(${tel})`
            }}
          />
        </div>
        <div
          className={classnames(`${itemCls} ${itemCls}-mail`, {
            [`${itemCls}-active`]: activeKey === 'mail'
          })}
          onMouseEnter={() => show('mail')}
          onClick={() => show('mail')}
        >
          <div
            className={`${itemCls}-icon`}
            style={{
              backgroundImage: `url(${mail})`
            }}
          />
        </div>
      </div>

      <div
        className={classnames({
          [`${baseCls}-content`]: true,
          [`${baseCls}-content-active`]: !!activeKey
        })}
      >
        {activeKey === 'qq' && (
          <div className={`${itemCls}-link`}>
            <a
              href="https://wpa.qq.com/msgrd?v=3&uin=598138008&site=qq&menu=yes"
              target="_blank"
            >
              <span>黎先生：</span>
              <img src={qqBtn} />
            </a>
          </div>
        )}
        {activeKey === 'tel' && (
          <React.Fragment>
            <div className={`${itemCls}-title`}>电话直呼</div>
            <div className={`${itemCls}-link ${itemCls}-link-r`}>
              <a target="_blank" href="tel:13828838681">
                黎先生：13828838681
              </a>
            </div>
          </React.Fragment>
        )}
        {activeKey === 'mail' && (
          <React.Fragment>
            <div className={`${itemCls}-link ${itemCls}-link-r`}>
              <a target="_blank" href="mailto:598138008@qq.com">
                发送邮件
              </a>
            </div>
          </React.Fragment>
        )}
      </div>
      {/* <div className={`${baseCls}-hide`}>
        <div
          className={`${baseCls}-hide-btn`}
          style={{
            backgroundImage: `url(${hide})`
          }}
        ></div>
      </div> */}
    </div>
  );
};

export default Toolbar;
