import styled from 'styled-components';
import fonts from 'styles/fonts';

import { IComment } from 'types/Community';

const Comment = ({ comment }: { comment: IComment }) => {
  return (
    <Conatiner>
      <Profile img={comment.profile} />
      <div style={{ flex: 1 }}>
        <strong className="comment-nickname">{comment.nickname}</strong>
        <div className="comment-content">{comment.content}</div>
      </div>
    </Conatiner>
  );
};

export default Comment;

const Conatiner = styled.div`
  display: flex;
  gap: 7px;
  padding-bottom: 16px;

  .comment-nickname {
    ${fonts.Body2}
    font-family: 'Noto Sans';
    font-weight: bold;
    overflow: hidden;
    width: 50px;
    text-overflow: ellipsis;
    word-break: break-all;
  }

  .comment-content {
    font-family: 'Roboto';
    ${fonts.Caption}
    margin-top: 5px;
    overflow: hidden;
    max-height: 14px;
  }
`;

const Profile = styled.figure<{ img: string }>`
  position: relative;
  bottom: -2px;
  background-image: url(${props => props.img});
  background-size: cover;
  background-position: center;
  width: 30px;
  height: 30px;
  border-radius: 15px;
`;
