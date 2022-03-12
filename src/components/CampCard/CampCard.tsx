import { Link } from 'react-router-dom';
import { ICamp } from 'types/type';

import styled from 'styled-components';
import fonts from 'styles/fonts';
import dayjs from 'dayjs';

interface Props {
  camp: ICamp;
  isHeadField: boolean;
}

const CampCard = ({ camp, isHeadField }: Props) => {
  return (
    <Container bgImg={camp.thumbnail}>
      <Link to={`/camp/${camp.id}`}>
        <BgOpacityBlack />
        <div className="camp-content">
          <div className="camp-head">
            {isHeadField ? `${camp.field}/${camp.skill}` : camp.status}
          </div>
          <div className="camp-name">{camp.name}</div>
          <div className="camp-start-date">
            {dayjs(camp.startDate).format('M월 DD부터')}
          </div>
        </div>
      </Link>
    </Container>
  );
};

export default CampCard;

const Container = styled.article<{ bgImg: string }>`
  flex: 1;

  a {
    position: relative;
    display: block;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 280px;
    margin-bottom: 8px;
    background-image: url(${props => props.bgImg});
    background-size: cover;
    background-position: center;
    border-radius: 10px;
    cursor: pointer;
  }

  .camp-content {
    padding: 20px;
    color: white;
    z-index: 1;
    position: relative;
  }

  .camp-head {
    ${fonts.Caption}
    padding-bottom:8px;
  }

  .camp-name {
    ${fonts.Body1}
    font-weight:bold;
    padding-bottom: 8px;
  }

  .camp-start-date {
    ${fonts.Caption}
  }
`;

const BgOpacityBlack = styled.div`
  position: absolute;
  height: 50%;
  width: 100%;
  left: 0;
  bottom: 0;
  background: linear-gradient(
    180deg,
    rgba(39, 63, 40, 0) 0%,
    rgba(89, 89, 89, 0.558824) 15.62%,
    #000000 70.83%
  );
  border-radius: 0px 0px 10px 10px;
`;
