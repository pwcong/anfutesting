import React from 'react';

import Swiper from 'swiper';
import 'swiper/css/swiper.min.css';

import banner4 from '@/assets/imgs/banner4.jpg';
import banner5 from '@/assets/imgs/banner5.jpg';
import banner6 from '@/assets/imgs/banner6.jpg';
import banner1 from '@/assets/imgs/banner1.jpg';
import banner2 from '@/assets/imgs/banner2.jpg';
import banner3 from '@/assets/imgs/banner3.jpg';

export default class Section extends React.PureComponent {
  swiper: any;
  prevEl: any;
  nextEl: any;
  pageEl: any;

  componentDidMount() {
    new Swiper(this.swiper, {
      navigation: {
        nextEl: this.nextEl,
        prevEl: this.prevEl
      },
      pagination: {
        el: '.swiper-pagination'
      },
      autoplay: {
        delay: 5000
      }
    });
  }

  render() {
    const banners = [banner4, banner5, banner6, banner1, banner2, banner3];
    const bannersCls = 'banners';

    return (
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
    );
  }
}
