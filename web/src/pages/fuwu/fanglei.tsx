import React from 'react';

import fanglei from '@/assets/imgs/fanglei.jpg';

const Section: React.FunctionComponent = () => {
  const baseCls = 'fanglei';
  return (
    <div className={baseCls}>
      <div className={`${baseCls}-title`}>防雷检测</div>
      <div className={`${baseCls}-imgs`}>
        <img className={`${baseCls}-img`} src={fanglei} />
      </div>
    </div>
  );
};

export default Section;
