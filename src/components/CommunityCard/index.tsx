import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { ICommunity } from 'types/Community';
import { Tags } from 'components';
import Comments from '../Comments';

import fonts from 'styles/fonts';
import colors from 'styles/colors';

interface IProps {
  community: ICommunity;
}

const CommunityCard = ({ community }: IProps) => {
  // 글자 자르는 함수
  const truncate = (param: string, maxlength: number) => {
    let name = param;
    let length = name && name.length; // TODO: Error: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function. // 해결 방법: && 연산자 사용

    return length > maxlength
      ? (name = name.slice(0, maxlength) + ' ...')
      : name;
  };

  return (
    <Link to={`/community/${community.id}`} style={{ flex: 1 }}>
      <Container>
        <div>
          <Tags tags={community.tags} />
          <div className="title">{truncate(community.title, 14)}</div>
          <div className="content">{truncate(community.name, 40)}</div>
        </div>
        <div>
          <Comments comments={community.comments} />
          <button className="btn" type="button">
            + 더보기
          </button>
        </div>
      </Container>
    </Link>
  );
};

export default CommunityCard;

const Container = styled.article`
  padding: 14px;
  height: 320px;

  border: 1px solid #cccccc;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .title {
    padding-top: 8px;
    ${fonts.Body1};
    font-weight: bold;
  }
  .content {
    padding-top: 10px;
    ${fonts.Body1};
  }

  img {
    background-size: cover;
    background-position: center;
    width: 30px;
    height: 30px;
    border-radius: 15px;
  }

  .btn {
    color: ${colors.secondary1};
    width: 100%;
    background: inherit;
    border: none;
    box-shadow: none;
    border-radius: 0;
    padding: 0;
    overflow: visible;
    cursor: pointer;
  }
`;
