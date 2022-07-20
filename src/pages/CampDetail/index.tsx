import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Padding, Skeleton } from 'components';

import styled, { css } from 'styled-components';
import { maxWidth } from 'styles/mixin';
import CampsStore from 'stores/CampsStore';
import { useMediaQuery } from 'react-responsive';
import {
  HeaderSection,
  InfoSection,
  ReviewSection,
  FaqSection,
} from './components';

const CampDetail = () => {
  const { campId } = useParams();
  const campStore = useContext(CampsStore);

  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [height, setHeight] = useState<number>(0);

  const isMobile = useMediaQuery({
    query: '(max-width: 768px)',
  });

  useEffect(() => {
    campStore.fetchCampById(String(campId));
  }, [campId, campStore]);

  /**
   * 모든 이미지가 로드 된 후, getHeight 함수를 호출한다.
   */
  const onloadImages = useCallback(() => {
    if (imgRef.current) {
      const imgs = imgRef.current.querySelectorAll('img');

      for (let i = 0; i < imgs.length; i++) {
        imgs[i].onload = () => {
          if (i === imgs.length - 1) getHeight();
        };
      }
    }
  }, []);

  /**
   * 현재 container의 총 높이를 구한다
   */
  const getHeight = () => {
    if (containerRef.current) {
      setHeight(containerRef.current.clientHeight);
    }
  };

  useEffect(() => {
    campStore.targetCamp && onloadImages();
    window.addEventListener('resize', getHeight);
    return () => {
      window.removeEventListener('resize', getHeight);
    };
  }, [campStore.targetCamp, onloadImages]);

  if (campStore.targetCamp) {
    return (
      <Container>
        <HeaderSection targetCamp={campStore.targetCamp} />

        <Main ref={containerRef}>
          <InfoSection
            targetCamp={campStore.targetCamp}
            sidebarheight={height}
          />

          {campStore.targetCamp && (
            <ImageSection ref={imgRef} isMobile={isMobile}>
              {campStore.targetCamp.images.map((img, index) => (
                <article key={index}>
                  <img src={img} alt="camp-detail-img" />
                  <Padding height={'60px'} />
                </article>
              ))}
            </ImageSection>
          )}

          <ReviewSection
            reviews={campStore.targetCamp.reviews}
            theme={campStore.targetCamp.theme}
          />
        </Main>

        <FaqSection faqs={campStore.targetCamp.faqs} />
      </Container>
    );
  } else {
    return (
      <div>
        <Skeleton
          style={{ width: '100%', height: 340, borderRadius: '10px' }}
          animated
        />
      </div>
    );
  }
};

export default observer(CampDetail);

const Container = styled.div`
  position: relative;
`;

const Main = styled.div``;

const ImageSection = styled.section<{ isMobile: boolean }>`
  ${maxWidth}
  display: flex;
  flex-wrap: wrap;
  padding: 0 16px;

  article {
    ${props =>
      !props.isMobile &&
      css`
        flex: 0 0 66.6666%;
      `}
  }
`;
