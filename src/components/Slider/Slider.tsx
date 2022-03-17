import styled, { css, keyframes } from 'styled-components';

import { ISlider } from 'types/type';

import SwiperCore, { Navigation, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { useRef } from 'react';

interface Props {
  slider: ISlider[];
  isMobile: boolean;
}

const Slider = ({ slider, isMobile }: Props) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  SwiperCore.use([Navigation, Scrollbar]);

  // Swiper Custom
  const settings = {
    navigation: { prevEl: prevRef.current, nextEl: nextRef.current },
    scrollbar: { draggable: true, el: '.swiper-scrollbar' },
    spaceBetween: 0,
    slidesPerView: 1,
    onBeforeInit: (swiper: SwiperCore) => {
      if (typeof swiper.params.navigation !== 'boolean') {
        if (swiper.params.navigation) {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }
      }
      swiper.navigation.update();
    },
  };

  return (
    <Container isMobile={isMobile}>
      <Swiper {...settings}>
        {slider.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="swiper-title">{slide.title}</div>
            <figure className="swiper-img">
              <img src={slide.thumbnail} alt={`슬라이드 이미지${index}+1`} />
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="swiper-scrollbar-wapper">
        <div className="swiper-scrollbar"></div>
        <div className="swiper-button-wapper">
          <button ref={prevRef}>{'<'}</button>
          <button ref={nextRef}>{'>'}</button>
        </div>
      </div>
    </Container>
  );
};

export default Slider;

const textAnime = keyframes`
  0% {
    opacity: 0;
    transform: translate(200px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
  `;

const Container = styled.div<{ isMobile: boolean }>`
  .swiper {
    &-slide {
      ${props =>
        !props.isMobile &&
        css`
          display: flex;
          align-items: flex-end;
          justify-content: center;
        `}
    }

    &-title {
      flex: 1;
      margin-bottom: 35px;
      white-space: pre-line;
      color: #ffffff;
      font-weight: bold;
      font-size: 46px;
      line-height: 56px;
    }

    &-slide-active {
      .swiper-title {
        animation: ${textAnime} 1s cubic-bezier(0, 0.55, 0.45, 1),
          opacity 0.8s linear;
      }
    }

    &-img {
      width: 100%;
      height: 100%;

      ${props =>
        !props.isMobile &&
        css`
          flex: 2;
          border-radius: 10px;
          background-position: center;
          background-size: cover;
          height: 400px;
        `}

      ${props =>
        props.isMobile &&
        css`
          padding-bottom: 30px;
        `}
    }

    &-scrollbar-wapper {
      display: inline-flex;
      justify-content: center;
      align-items: center;

      ${props =>
        props.isMobile &&
        css`
          display: flex;
          justify-content: center;
          align-items: center;
        `}
    }

    &-scrollbar {
      width: 225px;
      height: 3px;
      background-color: hsla(0, 0%, 100%, 0.1);

      ${props =>
        props.isMobile &&
        css`
          display: flex;
          width: 100%;
        `}
    }

    &-scrollbar-drag {
      background-color: #fff;
    }

    &-button-wapper {
      margin-left: 15px;

      &-prev,
      &-next {
        color: white;
      }
    }
  }
`;
