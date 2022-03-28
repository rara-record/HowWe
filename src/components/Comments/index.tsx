import styled from 'styled-components';
import { IComment } from 'types/Community';
import Comment from './Comment';

const Comments = ({ comments }: { comments: IComment[] }) => {
  return (
    <Container>
      {comments.map((comment, index) => (
        <Comment key={index} comment={comment} />
      ))}
    </Container>
  );
};

export default Comments;

const Container = styled.div``;
