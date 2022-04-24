import styled, { css } from 'styled-components';
import Button from 'components/UI/Button';
import { Tag } from 'components';
import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import { ICampDetail } from 'types/CampDetail';
import { useMediaQuery } from 'react-responsive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

interface IProps {
  targetCamp: ICampDetail;
  sidebarheight: number;
}

const Sidebar = ({ targetCamp, sidebarheight }: IProps) => {
  let [tags1, tags2] = targetCamp.tags;
  let { name, desc, startDate, process, seat, reviewMaterial, buttonName } =
    targetCamp;
  const toggleBtnRef = useRef<HTMLButtonElement>(null);
  const [isOn, setIsOn] = useState<boolean>(true);

  const toggeleBtn = () => setIsOn(!isOn);

  const isMobile = useMediaQuery({
    query: '(max-width: 768px)',
  });

  return (
    <Container isMobile={isMobile} sidebarheight={sidebarheight}>
      {targetCamp && (
        <aside>
          <Badge>
            {tags1} ∙ {tags2}
          </Badge>
          <Title>{name}</Title>

          <SidebarContents className={`${isOn ? 'block' : 'none'}`}>
            <p>{desc}</p>

            <dl>
              <SidebarItem>
                <dt>시작일</dt>
                <dd>{startDate}</dd>
              </SidebarItem>

              <SidebarItem>
                <dt>수업과정</dt>
                <dd>{process}</dd>
              </SidebarItem>

              <SidebarItem>
                <dt>정원</dt>
                <dd>{seat}</dd>
              </SidebarItem>

              <SidebarItem>
                <dt>제공 자료</dt>
                <dd>
                  {reviewMaterial.map((material, index) => (
                    <Tag key={index} color="gray5" font="gray2" size="medium">
                      {material}
                    </Tag>
                  ))}
                </dd>
              </SidebarItem>
            </dl>
          </SidebarContents>

          {!isMobile && (
            <>
              <SidebarToggle>
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
              </SidebarToggle>

              <Link to="/camp/apply">
                <Button color="blue" size="large" fullWidth>
                  {buttonName}
                </Button>
              </Link>
            </>
          )}

          {isMobile && (
            <MobileButtonSection>
              <hr />
              <div className="btn-row">
                <Link to="/camp/apply">
                  <Button color="blue" size="large" fullWidth>
                    {buttonName}
                  </Button>
                </Link>
              </div>
            </MobileButtonSection>
          )}
        </aside>
      )}
    </Container>
  );
};

export default Sidebar;

const Container = styled.div<{ isMobile: boolean; sidebarheight: number }>`
  border-bottom: 1px solid #eee;

  ${props =>
    !props.isMobile &&
    css`
      height: ${props.sidebarheight}px;
      position: absolute;
      right: 0;
      top: 0;
      max-width: 332px;
    `}

  aside {
    margin-top: 25px;

    ${props =>
      !props.isMobile &&
      css`
        position: sticky;
        top: 100px;
        margin: 32px 0 35px;
        max-width: 332px;
        padding: 24px;
        background-color: white;
        border-radius: 6px;
        box-shadow: 0 0 6px rgb(0 0 0 / 10%);
        z-index: 1;
      `}
  }
`;

const Badge = styled.span`
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  display: inline-flex;
  color: #3c4144;
`;

const Title = styled.h1`
  font-size: 19px;
  font-weight: 600;
  line-height: 28px;
  color: #040505;
  margin-bottom: 20px;
`;

const SidebarContents = styled.div`
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
    height: 200px;
  }
  &.none {
    height: 0;
  }
`;

const SidebarItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 4px;
  font-size: 14px;
  margin-bottom: 10px;
  line-height: 20px;

  dt {
    color: rgb(148, 155, 160);
  }
`;

const SidebarToggle = styled.div`
  position: relative;
  margin-bottom: 25px;

  .toggle-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 50%;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: #fff;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 6px rgb(0 0 0 / 10%);
    cursor: pointer;
  }

  .horizontal-line {
    border-top: 1px;
    border-color: #eaecee;
    height: inherit;
    width: inherit;
  }
`;

const MobileButtonSection = styled.section`
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
`;
