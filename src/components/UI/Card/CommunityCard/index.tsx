import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ICommunity } from 'types/Community';
import Tag from 'components/UI/Tag';
import Comments from '../../../Comments';
import colors from 'styles/colors';
import { useCallback } from 'react';

interface IProps {
  community: ICommunity;
}

const CommunityCard = ({ community }: IProps) => {
  const { id, title, content, comments } = community;
  const [tag1, tag2] = community.tags;

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
          <TagGroup>
            <Tag color="primary" size="medium">
              {tag1}
            </Tag>
            <Tag color="gray5" font="gray1" size="medium">
              {tag2}
            </Tag>
          </TagGroup>
          <div className="title">{truncate(title, 20)}</div>
          <div className="content">{truncate(content, 40)}</div>
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
    height: 36px;
    padding-top: 10px;
    font-size: 16px;
    line-height: 18px;
    letter-spacing: -0.01em;
    font-weight: bold;
    margin-bottom: 10px;
    text-overflow: ellipsis;
  }
  .content {
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.01em;
    overflow: hidden;
    text-overflow: ellipsis;
    /* display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical; */
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

const TagGroup = styled.div``;
