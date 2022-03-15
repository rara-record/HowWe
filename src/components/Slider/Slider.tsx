import styled from 'styled-components';
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
    <Container>
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

const Container = styled.div`
  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }

  .slide-title {
    flex: 1;
    margin-bottom: 35px;
    white-space: pre-line;
    color: #ffffff;
    font-weight: bold;
    font-size: 48px;
    line-height: 56px;
  }

  .slide-img {
    flex: 2;
    border-radius: 10px;
    background-position: center;
    background-size: cover;
    height: 400px;
  }

  .swiper-scrollbar {
    width: 225px;
    height: 3px;
    background-color: hsla(0, 0%, 100%, 0.1);
  }

  .swiper-scrollbar-drag {
    background-color: #fff;
  }

  .swiper-button-prev,
  .swiper-button-next {
    color: white;
  }
`;
