import Sidebar from './Sidebar';
import styled, { css } from 'styled-components';
import { maxWidth } from 'styles/mixin';
import { ICampDetail } from 'types/CampDetail';
import { useMediaQuery } from 'react-responsive';

interface IProps {
  targetCamp: ICampDetail;
  sidebarheight: number;
}

const InfoSection = ({ targetCamp, sidebarheight }: IProps) => {
  const isMobile = useMediaQuery({
    query: '(max-width: 768px)',
  });

  return (
    <Container isMobile={isMobile}>
      {/* infobox */}
      <InfoBox isMobile={isMobile}>
        <h1>
          대답없는 VOD 강의에 <strong>라이브</strong>로 답하다.
        </h1>
        <p>
          React만큼은 실무에 제대로 활용할 수 있도록, <br></br>
          오프라인 강의와 온라인 VOD의 장점만 모았습니다.
        </p>
        <InfoList isMobile={isMobile}>
          <li>
            <h2>LIVE CLASS 🎥</h2>
            <p>라이브로 묻고 해답을 얻으세요.</p>
          </li>

          <hr className="line" />

          <li>
            <h2>KEEP DOING 🏃</h2>
            <p>미루지 말고 실시간으로 만나요.</p>
          </li>

          <hr className="line" />

          <li>
            <h2>CAN DO 👊</h2>
            <p>실무 과제를 풀며 제대로 활용해요.</p>
          </li>
        </InfoList>
      </InfoBox>

      {/* sidebar */}
      <SidebarSection>
        <Sidebar targetCamp={targetCamp} sidebarheight={sidebarheight} />
      </SidebarSection>
    </Container>
  );
};

export default InfoSection;

const Container = styled.section<{ isMobile: boolean }>`
  ${props =>
    props.isMobile &&
    css`
      flex-direction: column-reverse;
    `}

  ${maxWidth}
  display: flex;
  flex-wrap: wrap;
  gap: 2.5%;
  padding: 0 16px;
`;

const InfoBox = styled.div<{ isMobile: boolean }>`
  ${props =>
    !props.isMobile &&
    css`
      flex: 0 0 66.6666%;
    `}

  h1 {
    font-size: 22px;
    font-weight: 600;
    line-height: 28px;
    margin: 32px 0;
    color: #040505;

    strong {
      color: #971818;
    }
  }

  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 25px;
    color: #3c4144;
  }
`;

const InfoList = styled.ul<{ isMobile: boolean }>`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
  padding: 18px 24px;
  background-color: #fcfcfc;

  ${props =>
    props.isMobile &&
    css`
      flex-direction: column;
    `}

  h2 {
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 600;
    line-height: 30px;
    color: #202325;
  }

  p {
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
    color: #595f63;
    letter-spacing: 0.2px;
  }

  .line {
    border-left: 1px;
    border-color: #eaecee;
    height: inherit;
  }
`;

const SidebarSection = styled.div`
  position: relative;
  flex: 0 0 calc(100% - 66.6666% - 2.5%);
`;
