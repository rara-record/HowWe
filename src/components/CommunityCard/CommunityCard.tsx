import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { ICommunity } from 'types/type';
import { Tags, Comments } from 'components';

import fonts from 'styles/fonts';
import colors from 'styles/colors';

interface IProps {
  community: ICommunity;
}

const CommunityCard = ({ community }: IProps) => {
  return (
    <Link to={`/community/${community.id}`}>
      <Container>
        <div>
          <Tags tags={community.tags} />
          <div className="title">{community.title}</div>
          <div className="content">{community.content}</div>
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
