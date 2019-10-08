import React from 'react';

import jieshao1 from '@/assets/imgs/jieshao1.png';
import jieshao2 from '@/assets/imgs/jieshao2.png';
import jieshao3 from '@/assets/imgs/jieshao3.png';
import jieshao4 from '@/assets/imgs/jieshao4.png';

const Section: React.FunctionComponent = () => {
  const baseCls = 'qiye';
  return (
    <div className={baseCls}>
      <div className={`${baseCls}-title`}>
        惠州市安富电气消防安全检测有限公司
      </div>
      <div className={`${baseCls}-content`}>
        <p>
          惠州市安富电气消防安全检测有限公司（简称“AFJT”）是惠州市消防专业领域独立的、权威的第三方检验检服务机构，致力于为客户提供全方位的建筑装饰材料的阻燃性能测试、建筑电气消防安全检测、建筑物的防雷接地装置检测、安全评估、安全标准预案工程服务。
        </p>
        <p>
          安富检测的主要检测业务受广东省消防总队及各级地方消防部门的监督指导。接受建设和使用单位委托，对新、扩、改建建筑工程、内部装修工程、用途变更的工程中的电气设施以及对装饰材料防火阻燃性能进行竣工前的消防安全技术专项检测，包括接受对己投入使用的电气设施进行消防安全技术检测的委托。其由电气设施检测包括电气消防安全检测与防雷装置接地检测。
        </p>
        <p>
          电气消防安全检测在西方经济发达国家已有几十年的历史，其技术法规己相当完善，在我国电气消防安全检测行业才刚刚起步。我们参考了发达国家的相关经验，引进了国际先进的检测仪器和设备，通过对电气设施进管全方位的量化鉴测，全面、准确地反映电气火灾隐患的准确位置，把传统的检查工作提升到一个新的科学高度，做到了查明电气火灾隐患的科学化、图谱化、数据化。
        </p>
        <p>
          安富检测电气消防安全检测的主要检测仪器包括：红外成像仪（FLUKE进口品牌非接触式温度测试成像仪，属行业高端）、绝缘测试仪、超声波测试仪(一般电检测机构没配备）、电能质量分析仪（一般电气检测机构没配备）、漏电开关测试仪、接地装置电阻测试仪、测试插座相位仪、线路漏电量测试仪等。
        </p>
      </div>
      <div className={`${baseCls}-imgs`}>
        <img className={`${baseCls}-img`} src={jieshao1} />
        <img className={`${baseCls}-img`} src={jieshao2} />
        <img className={`${baseCls}-img`} src={jieshao3} />
        <img className={`${baseCls}-img`} src={jieshao4} />
      </div>
    </div>
  );
};

export default Section;
