import styled from 'styled-components';
import fonts from 'styles/fonts';

import { IComment } from 'types/type';

const Comment = ({ comment }: { comment: IComment }) => {
  return (
    <Conatiner>
      <Profile img={comment.profile} />
      <div>
        <strong className="comment-nickname">{comment.nickname}</strong>
        <div className="comment-content">{comment.content}</div>
      </div>
    </Conatiner>
  );
};

export default Comment;

const Conatiner = styled.div`
  display: flex;
  gap: 4px;
  padding-bottom: 16px;

  .comment-nickname {
    ${fonts.Body2}
    font-family: 'Noto Sans';
    font-weight: bold;
    padding-bottom: 4px;
  }
  .comment-content {
    font-family: 'Roboto';
    ${fonts.Caption}
  }
`;

const Profile = styled.figure<{ img: string }>`
  background-image: url(${props => props.img});
  background-size: cover;
  background-position: center;
  width: 30px;
  height: 30px;
  border-radius: 15px;
`;
