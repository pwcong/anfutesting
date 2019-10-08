import React from 'react';

import demo from '@/assets/imgs/demo.png';

export interface IProps {}
interface IState {
  demoKey: string;
}

export default class Section extends React.PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      demoKey: 'dianqi'
    };
  }
  render() {
    const demos = [
      {
        key: 'dianqi',
        title: '电气检测',
        subTitle: 'Fire engineering',
        main: {
          title: '',
          content: '',
          img: demo
        }
      },
      {
        key: 'xiaofang',
        title: '消防检测',
        subTitle: 'Maintenance',
        main: {
          title: '',
          content: '',
          img: demo
        }
      },
      {
        key: 'fanglei',
        title: '防雷检测',
        subTitle: 'Security Project',
        main: {
          title: '',
          content: '',
          img: demo
        }
      }
    ];

    const demosCls = 'demos';

    return (
      <div className={demosCls}>
        <div className={`${demosCls}-wrapper`}>
          <div className={`${demosCls}-head`}>
            <div className={`${demosCls}-title`}>成功案例</div>
            <div className={`${demosCls}-title-sub`}>
              为您量身打造安防与消防集成综合解决方案
            </div>
          </div>
          <div className={`${demosCls}-content`}>
            <div className={`${demosCls}-navs`}>
              {demos.map(d => (
                <div
                  onClick={() => {
                    this.setState({
                      demoKey: d.key
                    });
                  }}
                  key={d.key}
                  className={[`${demosCls}-nav`]
                    .concat(
                      d.key === this.state.demoKey
                        ? [`${demosCls}-nav-active`]
                        : []
                    )
                    .join(' ')}
                >
                  <div className={`${demosCls}-nav-title`}>{d.title}</div>
                  <div className={`${demosCls}-nav-title-sub`}>
                    {d.subTitle}
                  </div>
                </div>
              ))}
            </div>
            <div className={`${demosCls}-list`}>
              {demos.map(d => (
                <div
                  key={d.key}
                  className={`${demosCls}-item`}
                  style={{
                    display: d.key === this.state.demoKey ? 'block' : 'none'
                  }}
                >
                  <div
                    className={`${demosCls}-item-img`}
                    style={{
                      backgroundImage: `url(${d.main.img})`
                    }}
                  ></div>
                  <div className={`${demosCls}-item-main`}>
                    <div className={`${demosCls}-item-title`}>
                      {d.main.title}
                    </div>
                    <div className={`${demosCls}-item-content`}>
                      {d.main.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
