import React from 'react';

import fengcai1 from '@/assets/imgs/fengcai1.png';
import fengcai2 from '@/assets/imgs/fengcai2.png';
import fengcai3 from '@/assets/imgs/fengcai3.jpg';

const Section: React.FunctionComponent = () => {
  const baseCls = 'fengcai';
  return (
    <div className={baseCls}>
      <div className={`${baseCls}-imgs`}>
        <img className={`${baseCls}-img`} src={fengcai1} />
        <img className={`${baseCls}-img`} src={fengcai2} />
        <img className={`${baseCls}-img`} src={fengcai3} />
      </div>
    </div>
  );
};

export default Section;
