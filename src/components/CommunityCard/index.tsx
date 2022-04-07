import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { ICommunity } from 'types/Community';
import { Tags } from 'components';
import Comments from '../Comments';

import fonts from 'styles/fonts';
import colors from 'styles/colors';
import { useCallback } from 'react';

interface IProps {
  community: ICommunity;
}

const CommunityCard = ({ community }: IProps) => {
  const { id, tags, title, name, comments } = community;

  const truncate = useCallback((text: string, maxlength: number) => {
    let name: string = text;
    let length: number | string = name && name.length;

    return length > maxlength
      ? (name = name.slice(0, maxlength) + ' ...')
      : name;
  }, []);

  return (
    <Link to={`/community/${id}`} style={{ flex: 1 }}>
      <Container>
        <div>
          <Tags tags={tags} />
          <div className="title">{truncate(title, 20)}</div>
          <div className="content">{truncate(name, 40)}</div>
        </div>
        <div>
          <Comments comments={comments} />
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
