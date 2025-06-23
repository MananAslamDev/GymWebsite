import React, { useEffect } from 'react';
import { Swiper as SwiperJS } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Swiper = ({ children, className, options }) => {
  useEffect(() => {
    const swiper = new SwiperJS(`.${className}`, {
      ...options,
      navigation: options.navigation || false,
      pagination: options.pagination || false,
    });

    return () => swiper.destroy();
  }, [className, options]);

  return (
    <div className={`swiper ${className}`}>
      <div className="swiper-wrapper">{children}</div>
      {options.navigation && (
        <>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </>
      )}
      {options.pagination && <div className="swiper-pagination"></div>}
    </div>
  );
};

export default Swiper;