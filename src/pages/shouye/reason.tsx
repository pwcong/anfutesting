import React from 'react';

import reasonHead from '@/assets/imgs/bg-reason-head.png';
import reason1 from '@/assets/imgs/reason1.jpg';
import reason2 from '@/assets/imgs/reason2.jpg';
import reason3 from '@/assets/imgs/reason3.jpg';
import reason4 from '@/assets/imgs/reason4.jpg';

const Section: React.FunctionComponent = props => {
  const reasonsCls = 'reasons';

  const itemCls = `${reasonsCls}-item`;

  return (
    <div className={reasonsCls}>
      <div className={`${reasonsCls}-wrapper`}>
        <div className={`${reasonsCls}-head`}>
          <div
            className={`${reasonsCls}-head-wrapper`}
            style={{
              backgroundImage: `url(${reasonHead})`
            }}
          >
            <div className={`${reasonsCls}-title`}>选安富检测的四大理由</div>
            <div className={`${reasonsCls}-title-sub`}>
              CHOOSE FOUR GROUNDS OF ANFU
            </div>
          </div>
        </div>
        <div className={`${reasonsCls}-list`}>
          <div className={`${reasonsCls}-col`}>
            <div className={itemCls}>
              <div className={`${itemCls}-head`}>
                <div className={`${itemCls}-title`}>
                  我们专注的精神、完美的掌握
                </div>
                <div className={`${itemCls}-title-sub`}>
                  Our concentration spirit, perfect mastery
                </div>
                <div className={`${itemCls}-title-desc`}>
                  以优质的服务，获得客户好评
                </div>
              </div>
              <div className={`${itemCls}-content`}>
                <div
                  className={`${itemCls}-img`}
                  style={{
                    backgroundImage: `url(${reason1})`
                  }}
                />
              </div>
            </div>
            <div className={itemCls}>
              <div className={`${itemCls}-head`}>
                <div className={`${itemCls}-title`}>
                  政府推荐单位 获得客户高度认可
                </div>
                <div className={`${itemCls}-title-sub`}>
                  Government recommended units receive highly recognized
                  customers
                </div>
                <div className={`${itemCls}-title-desc`}>
                  以优质的服务，获得客户好评
                </div>
              </div>
              <div className={`${itemCls}-content`}>
                <div
                  className={`${itemCls}-img`}
                  style={{
                    backgroundImage: `url(${reason3})`
                  }}
                />
              </div>
            </div>
          </div>
          <div className={`${reasonsCls}-col`}>
            <div className={itemCls}>
              <div className={`${itemCls}-head`}>
                <div className={`${itemCls}-title`}>我们科学严谨、技术领先</div>
                <div className={`${itemCls}-title-sub`}>
                  We are rigorous in science and advanced in technology
                </div>
                <div className={`${itemCls}-title-desc`}>
                  以优质的服务，获得客户好评
                </div>
              </div>
              <div className={`${itemCls}-content`}>
                <div
                  className={`${itemCls}-img`}
                  style={{
                    backgroundImage: `url(${reason2})`
                  }}
                />
              </div>
            </div>
            <div className={itemCls}>
              <div className={`${itemCls}-head`}>
                <div className={`${itemCls}-title`}>
                  团队技术力量雄厚，售后服务有保障
                </div>
                <div className={`${itemCls}-title-sub`}>
                  The team is strong in technology, service guaranteed
                </div>
                <div className={`${itemCls}-title-desc`}>
                  以优质的服务，获得客户好评
                </div>
              </div>
              <div className={`${itemCls}-content`}>
                <div
                  className={`${itemCls}-img`}
                  style={{
                    backgroundImage: `url(${reason4})`
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
