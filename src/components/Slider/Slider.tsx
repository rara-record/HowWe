import styled, { css, keyframes } from 'styled-components';
import { ISlider } from 'types/type';

import { Navigation, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

interface Props {
  slider: ISlider[];
  isMobile: boolean;
}

const Slider = ({ slider, isMobile }: Props) => {
  return (
    <Container isMobile={isMobile}>
      <Swiper
        modules={[Navigation, Scrollbar]}
        slidesPerView={1}
        navigation
        scrollbar={{ draggable: true }}
      >
        {slider.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slide-title">{slide.title}</div>
            <div className="slide-img">
              <img src={slide.thumbnail} alt={`슬라이드 이미지${index}+1`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
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
  .swiper-slide {
    ${props =>
      !props.isMobile &&
      css`
        display: flex;
        align-items: flex-end;
        justify-content: center;
      `}
  }

  .slide-title {
    flex: 1;
    margin-bottom: 35px;
    white-space: pre-line;
    color: #ffffff;
    font-weight: bold;
    font-size: 46px;
    line-height: 56px;
  }

  .swiper-slide-active .slide-title {
    animation: ${textAnime} 1s cubic-bezier(0, 0.55, 0.45, 1),
      opacity 0.8s linear;
  }

  .slide-img {
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

  .swiper-scrollbar {
    width: 225px;
    height: 3px;
    background-color: hsla(0, 0%, 100%, 0.1);

    ${props =>
      props.isMobile &&
      css`
        width: 100%;
      `}
  }

  .swiper-scrollbar-drag {
    background-color: #fff;
  }

  .swiper-button-prev,
  .swiper-button-next {
    color: white;
  }
`;
