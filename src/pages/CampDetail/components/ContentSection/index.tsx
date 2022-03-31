import { Padding, Reviews } from 'components';
import styled from 'styled-components';
import { ICampDetail } from 'types/CampDetail';
interface IProps {
  targetCamp: ICampDetail;
}

const ContentSection = ({ targetCamp }: IProps) => {
  return (
    <Container>
      {/* 상세페이지 정보 */}

      <Info>
        <h1>
          대답없는 VOD 강의에 <strong>라이브</strong>로 답하다.
        </h1>
        <p>
          React만큼은 실무에 제대로 활용할 수 있도록, <br></br>
          오프라인 강의와 온라인 VOD의 장점만 모았습니다.
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
      </Info>

      {/* 상세페이지 이미지 */}
      <Images>
        {targetCamp.images.map((img, index) => (
          <article key={index}>
            <img src={img} alt="camp-detail-img" />
            <Padding height={'60px'} />
          </article>
        ))}
      </Images>

      {/* 리뷰 */}
      <Reviews reviews={targetCamp.reviews} />
    </Container>
  );
};

export default ContentSection;

const Container = styled.div`
  width: 65%;
  padding: 10px;
`;

const Info = styled.div`
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

const Images = styled.div``;
