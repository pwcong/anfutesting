import React from 'react';

import './style.scss';

const Footer: React.FunctionComponent = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-top-wrapper"></div>
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

export default Footer;
