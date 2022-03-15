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

const Container = styled.div``;
