import styled from 'styled-components';
import { maxWidth } from 'styles/mixin';
import { ICampDetail } from 'types/CampDetail';
import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';

interface IProps {
  targetCamp: ICampDetail;
  sidebarheight: number;
}

const DetailSidebar = ({ targetCamp, sidebarheight }: IProps) => {
  const toggleBtnRef = useRef(null);
  const [isOn, setIsOn] = useState<boolean>(false);
  let [tags1, tags2] = targetCamp.tags;
  let { name, desc, startDate, process, seat } = targetCamp;
  console.log(`sidebarheight ${sidebarheight}`);

  const toggeleBtn = () => setIsOn(!isOn);

  console.log('DetailSidebar');

  return (
    <Container sidebarheight={sidebarheight}>
      <div className="row">
        {targetCamp && (
          <aside>
            <span className="tag">
              {tags1} ∙ {tags2}
            </span>
            <h1>{name}</h1>

            <div className={`side-box-content ${isOn ? 'block' : 'none'}`}>
              <p>{desc}</p>

              <dl className="sidebox-info">
                <div>
                  <dt>시작일</dt>
                  <dl>{startDate}</dl>
                </div>

                <div>
                  <dt>수업과정</dt>
                  <dl>{process}</dl>
                </div>

                <div>
                  <dt>정원</dt>
                  <dl>{seat}</dl>
                </div>
              </dl>
            </div>

            <div className="detail-sidebox-info-toggle">
              <button
                className="toggle-btn"
                ref={toggleBtnRef}
                onClick={toggeleBtn}
              >
                토글버튼
              </button>
            </div>

            <Link to="/camp/apply">
              <button className="btn-large">더 잘하는 개발자 되기 </button>
            </Link>
          </aside>
        )}
      </div>
    </Container>
  );
};

export default DetailSidebar;

const Container = styled.div<{ sidebarheight: number }>`
  position: relative;
  ${maxWidth};

  .row {
    position: absolute;
    right: 0;
    top: 0;
    max-width: 33%;
    height: ${props => props.sidebarheight}px;
  }

  aside {
    position: sticky;
    top: 100px;
    margin: 15px 0 40px;
    padding: 24px;
    background-color: white;
    border-radius: 6px;
    box-shadow: 0 0 6px rgb(0 0 0 / 10%);
    z-index: 1;

    .tag {
      font-size: 14px;
      line-height: 20px;
      font-weight: 400;
      display: inline-flex;
      color: #3c4144;
    }

    h1 {
      font-size: 22px;
      font-weight: 600;
      line-height: 28px;
      color: #040505;
      margin-bottom: 20px;
    }

    .side-box-content {
      overflow: hidden;
      transition: height 0.25s cubic-bezier(0.4, 0, 0.2, 1);

      p {
        background-color: #fcfcfc;
        padding: 10px;
        font-size: 14px;
        line-height: 20px;
        font-weight: 400;
        color: #3c4144;

        &::before {
          content: '☘️';
          font-size: 18px;
          padding-right: 5px;
        }
      }

      &.block {
        height: 120px;
      }
      &.none {
        height: 0;
      }
    }

    .btn-large {
      width: 100%;
      height: 48px;
      padding: 0 14px;
      min-width: 56px;
      border-radius: 8px;
      font-size: 16px;
      line-height: 25px;
      font-weight: 600;
      background-color: #2a7de1;
    }
  }
`;
