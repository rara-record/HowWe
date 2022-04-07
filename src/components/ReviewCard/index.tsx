import styled from 'styled-components';
import { IReviews } from 'types/CampDetail';

const ReviewCard = ({ review }: { review: IReviews }) => {
  return (
    <Container>
      <p
        className="review"
        dangerouslySetInnerHTML={{ __html: review.content }}
      ></p>
      <span className="reviewer">- {review.reviewer}</span>
    </Container>
  );
};

export default ReviewCard;

const Container = styled.article`
  padding: 24px;
  background-color: rgb(255, 255, 255);
  border-radius: 2px;
  margin-bottom: 16px;

  &:first-child,
  &:last-child {
    .review {
      padding: 20px 0;
    }
  }

  .review {
    width: 100%;
    font-size: 16px;
    line-height: 25px;
    letter-spacing: 0.02em;
    color: rgb(32, 35, 37);
    word-break: keep-all;
    word-wrap: break-word;
  }

  .reviewer {
    margin-top: 12px;
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
    color: rgb(148, 155, 160);
  }
`;
