import React from 'react';

import Swiper from 'swiper';

import banner1 from '@/assets/imgs/banner1.jpg';
import banner2 from '@/assets/imgs/banner2.jpg';
import banner3 from '@/assets/imgs/banner3.jpg';

import service1 from '@/assets/imgs/service1.png';
import service2 from '@/assets/imgs/service2.png';
import service3 from '@/assets/imgs/service3.png';

import demo from '@/assets/imgs/demo.png';

import './style/shouye.scss';
import 'swiper/css/swiper.min.css';

export interface IProps {}
interface IState {
  demoKey: string;
}

class Page extends React.PureComponent<IProps, IState> {
  swiper: any;
  prevEl: any;
  nextEl: any;
  pageEl: any;

  constructor(props: IProps) {
    super(props);
    this.state = {
      demoKey: 'dianqi'
    };
  }

  componentDidMount() {
    new Swiper(this.swiper, {
      navigation: {
        nextEl: this.nextEl,
        prevEl: this.prevEl
      },
      pagination: {
        el: '.swiper-pagination'
      }
    });
  }

  render() {
    const banners = [banner1, banner2, banner3];
    const services = [
      {
        title: '电气安全检测',
        img: service1
      },
      {
        title: '消防设施安全检测',
        img: service2
      },
      {
        title: '防雷设施安全检测',
        img: service3
      }
    ];
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

    const bannersCls = 'banners';
    const servicesCls = 'services';
    const demosCls = 'demos';

    return (
      <section className="shouye">
        <div
          className={`swiper-container ${bannersCls}`}
          ref={ref => (this.swiper = ref)}
        >
          <div className="swiper-wrapper">
            {banners.map((banner, index) => (
              <div className="swiper-slide" key={index}>
                <div
                  className="banner"
                  style={{
                    backgroundImage: `url(${banner})`
                  }}
                ></div>
              </div>
            ))}
          </div>
          <div
            className="swiper-button-next"
            ref={ref => (this.nextEl = ref)}
          ></div>
          <div
            className="swiper-button-prev"
            ref={ref => (this.prevEl = ref)}
          ></div>
          <div
            className="swiper-pagination"
            ref={ref => (this.pageEl = ref)}
          ></div>
        </div>
        <div className={servicesCls}>
          <div className={`${servicesCls}-wrapper`}>
            <div className={`${servicesCls}-head`}>
              <div className={`${servicesCls}-title`}>服务项目</div>
              <div className={`${servicesCls}-title-sub`}>
                提供专业的服务项目
              </div>
            </div>
            <div className={`${servicesCls}-list`}>
              {services.map((s, index) => (
                <div className={`${servicesCls}-item`} key={index}>
                  <div
                    className={`${servicesCls}-item-img`}
                    style={{
                      backgroundImage: `url(${s.img})`
                    }}
                  ></div>
                  <div className={`${servicesCls}-item-title`}>{s.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
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
      </section>
    );
  }
}

export default Page;
