import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { maxWidth } from 'styles/mixin';
import CampsStore from 'stores/CampsStore';
import styled from 'styled-components';
import Tags from 'components/Tags';
import fonts from 'styles/fonts';
import { Padding, Sidebar, Skeleton } from 'components';

const CampDetail = () => {
  const { campId } = useParams();
  const campStore = useContext(CampsStore);

  useEffect(() => {
    campStore.fetchCampById(Number(campId));
  }, [campId, campStore]);

  if (campStore.targetCamp) {
    // TODO: Error: cannot be used as a JSX component. Its return type 'Element | undefined' is not a valid JSX element. Type 'undefined' is not assignable to type 'Element | null'. // 해결방법: if문을 써주고 else문을 써주지 않아서, 반환되는 형식이 'Element | defined' 는 될 수 없다는 오류
    return (
      <Container className="camp-detail-container">
        <BannerBackground />

        <div className="inner">
          {/* 캠프 상세페이지 비주얼 */}
          <VisualSection>
            <div className="camp-detail-visual-title">
              <Tags tags={['2기모집']} />
              <h1>{campStore.targetCamp.name}</h1>
              <h2>{campStore.targetCamp.desc}</h2>
            </div>

            <figure className="camp-detail-visual-img">
              <img
                src={campStore.targetCamp.headerImage}
                alt="camp-detail-visual-img"
              />
            </figure>
          </VisualSection>

          <main>
            {/* 컨텐츠 */}
            <ContentSection>
              <InfoContainer>
                <h1>
                  대답없는 VOD 강의에 <strong>라이브</strong>로 답하다.
                </h1>
                <p>
                  React만큼은 실무에 제대로 활용할 수 있도록, <br></br>오프라인
                  강의와 온라인 VOD의 장점만 모았습니다.
                </p>

                <div className="info-box">
                  <article>
                    <h2>LIVE CLASS</h2>
                    <p>라이브로 묻고 해답을 얻으세요.</p>
                  </article>

                  <hr className="line" />

                  <article>
                    <h2>KEEP DOING</h2>
                    <p>미루지 말고 실시간으로 만나요.</p>
                  </article>

                  <hr className="line" />

                  <article>
                    <h2>CAN DO</h2>
                    <p>실무 과제를 풀며 제대로 활용해요.</p>
                  </article>
                </div>
              </InfoContainer>

              <ImageContainer>
                {campStore.targetCamp.images.map((img, index) => (
                  <article key={index}>
                    <img src={img} alt="camp-detail-img" />
                    <Padding height="40px" />
                  </article>
                ))}
              </ImageContainer>
            </ContentSection>

            {/* 사이드바 */}
            <Sidebar targetCamp={campStore.targetCamp} />
          </main>
        </div>
      </Container>
    );
  } else {
    return (
      <div>
        <Skeleton
          style={{ width: '100%', height: 280, borderRadius: '10px' }}
          animated
        />
      </div>
    );
  }
};

export default CampDetail;

const Container = styled.div`
  position: relative;

  .inner {
    ${maxWidth}
  }

  main {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    position: relative;
    width: 100%;
  }
`;

const BannerBackground = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 340px;
  background-color: #0084ad;
`;

const VisualSection = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  height: 340px;
  padding: 40px 16px 0;
  z-index: 1;

  .camp-detail-visual-title {
    flex: 1;
    align-self: flex-end;

    h1 {
      ${fonts.H1};
      font-size: 32px;
      word-break: keep-all;
      margin: 12px 0 16px;
      color: white;
    }

    h2 {
      ${fonts.H4}
      font-weight: normal;
      margin-bottom: 32px;
      color: #f3f4f5;
    }
  }

  .camp-detail-visual-img {
    flex: 1;
    overflow: hidden;

    img {
      width: 100%;
      margin-top: 40px;
      object-fit: cover;
      border-radius: 4px;
    }
  }
`;

const ContentSection = styled.section`
  flex: 2;
  padding: 10px;
`;

const InfoContainer = styled.div`
  letter-spacing: 0.1px;

  h1 {
    font-size: 24px;
    font-weight: 600;
    line-height: 28px;
    margin: 20px 0;
    color: #040505;

    strong {
      color: #971818;
    }
  }

  p {
    font-size: 17px;
    font-weight: 400;
    line-height: 25px;
    color: #3c4144;
  }

  .info-box {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 18px 24px;
    margin-top: 20px;
    background-color: #fcfcfc;

    article {
      position: relative;

      h2 {
        display: flex;
        align-items: center;
        font-size: 17px;
        font-weight: 600;
        line-height: 30px;
        color: #202325;
      }

      p {
        font-size: 15px;
        line-height: 20px;
        font-weight: 400;
        color: #595f63;
        letter-spacing: 0.2px;
      }
    }
  }

  .line {
    border-left: 1px;
    border-color: #eaecee;
    height: inherit;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
`;
