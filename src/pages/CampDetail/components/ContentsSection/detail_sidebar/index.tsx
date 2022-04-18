import styled, { css } from 'styled-components';
import { maxWidth } from 'styles/mixin';
import { ICampDetail } from 'types/CampDetail';
import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import Button from 'components/Button';
import { Tag } from 'components';

interface IProps {
  targetCamp: ICampDetail;
  sidebarheight: number;
}

const DetailSidebar = ({ targetCamp, sidebarheight }: IProps) => {
  const toggleBtnRef = useRef(null);
  const [isOn, setIsOn] = useState<boolean>(true);
  let { name, desc, startDate, process, seat, reviewMaterial, buttonName } =
    targetCamp;
  let [tags1, tags2] = targetCamp.tags;
  const isMobile = useMediaQuery({
    query: '(max-width: 768px)',
  });

  const toggeleBtn = () => setIsOn(!isOn);

  return (
    <Container sidebarheight={sidebarheight} isMobile={isMobile}>
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
                  <dd>{startDate}</dd>
                </div>

                <div>
                  <dt>수업과정</dt>
                  <dd>{process}</dd>
                </div>

                <div>
                  <dt>정원</dt>
                  <dd>{seat}</dd>
                </div>

                <div>
                  <dt>제공 자료</dt>
                  <dd>
                    {reviewMaterial.map((material, index) => (
                      <Tag key={index} color="gray5" font="gray2" size="medium">
                        {material}
                      </Tag>
                    ))}
                  </dd>
                </div>
              </dl>
            </div>

            {!isMobile && (
              <>
                <div className="sidebox-info-toggle">
                  <button
                    className="toggle-btn"
                    ref={toggleBtnRef}
                    onClick={toggeleBtn}
                  >
                    <FontAwesomeIcon
                      className={`${isOn ? 'click-active' : 'click-none'}`}
                      icon={faAngleDown}
                      size="xs"
                      color="#555"
                    />
                  </button>
                  <hr className="horizontal-line" />
                </div>

                <Link to="/camp/apply">
                  <Button color="blue" size="large" fullWidth>
                    더 잘하는 개발자 되기
                  </Button>
                </Link>
              </>
            )}

            {isMobile && (
              <section className="camp-mobile-btn">
                <hr />
                <div className="btn-row">
                  <Link to="/camp/apply">
                    <Button color="blue" size="large" fullWidth>
                      {buttonName}
                    </Button>
                  </Link>
                </div>
              </section>
            )}
          </aside>
        )}
      </div>
    </Container>
  );
};

export default DetailSidebar;

const Container = styled.div<{ sidebarheight: number; isMobile: boolean }>`
  position: relative;
  ${maxWidth};

  .row {
    height: 0;

    ${props =>
      props.isMobile === false &&
      css`
        height: ${props.sidebarheight}px;
        position: absolute;
        right: 0;
        top: 0;
        max-width: 33%;
        padding: 0 16px;
      `}
  }

  aside {
    position: sticky;
    top: 100px;
    margin-bottom: 40px;
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
      font-size: 19px;
      font-weight: 600;
      line-height: 28px;
      color: #040505;
      margin-bottom: 20px;
      word-break: keep-all;
      word-wrap: break-word;
    }

    .side-box-content {
      margin-bottom: 20px;
      overflow: hidden;
      transition: height 0.25s cubic-bezier(0.4, 0, 0.2, 1);

      p {
        background-color: #fcfcfc;
        margin-bottom: 24px;
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
        height: 190px;
      }
      &.none {
        height: 0;
      }

      .sidebox-info > div {
        display: flex !important;
        flex-direction: row;
        justify-content: space-between;
        font-size: 14px;
        margin-bottom: 10px;
        line-height: 20px;

        dt {
          color: rgb(148, 155, 160);
        }

        dd {
          color: rgb(60, 65, 68);
        }
      }
    }

    .sidebox-info-toggle {
      position: relative;
      margin-bottom: 25px;

      .toggle-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        position: absolute;
        top: 0;
        left: 50%;
        height: 16px;
        width: 16px;
        background-color: #fff;
        cursor: pointer;
        transform: translate(-50%, -50%);
        box-shadow: 0 0 6px rgb(0 0 0 / 10%);
      }

      .horizontal-line {
        border-top: 1px;
        border-color: #eaecee;
        height: inherit;
        width: inherit;
      }
    }

    .camp-mobile-btn {
      position: fixed;
      bottom: 0;
      left: 0;
      z-index: 2;
      width: 100%;

      hr {
        border-color: rgb(234, 236, 238);
        border-style: solid;
        border-top: 1px;
        width: inherit;
        height: 0;
        margin: 0;
      }

      .btn-row {
        background-color: white;
        padding: 15px 16px;
      }
    }
  }
`;
