import { useContext, useEffect, useRef, useState } from 'react';
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
  const [loading, setLoading] = useState(true);
  const [height, setHeight] = useState<number>(0);

  const isMobile = useMediaQuery({
    query: '(max-width: 768px)',
  });

  useEffect(() => {
    campStore.fetchCampById(String(campId));
  }, [campId, campStore]);

  useEffect(() => {
    setLoading(true);
    !loading && getHeight();
    window.addEventListener('resize', getHeight);
    return () => {
      window.removeEventListener('resize', getHeight);
    };
  }, [campStore.targetCamp, loading]);

  function getHeight() {
    if (containerRef.current) {
      setHeight(containerRef.current.clientHeight);
    }
  }

  if (campStore.targetCamp) {
    return (
      <Container>
        <HeaderSection targetCamp={campStore.targetCamp} />

        <Wrapper ref={containerRef}>
          <InfoSection
            targetCamp={campStore.targetCamp}
            sidebarheight={height}
          />

          <ImageSection isMobile={isMobile}>
            {campStore.targetCamp.images.map((img, index) => (
              <article key={index}>
                <img
                  onLoad={() => setLoading(false)}
                  src={img}
                  alt="camp-detail-img"
                />
                <Padding height={'60px'} />
              </article>
            ))}
          </ImageSection>

          <ReviewSection
            reviews={campStore.targetCamp.reviews}
            theme={campStore.targetCamp.theme}
          />
        </Wrapper>

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

const Wrapper = styled.div``;

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
