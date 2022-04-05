import styled from 'styled-components';
import { IReviews } from 'types/CampDetail';
import ReviewCard from 'components/ReviewCard';

interface IProps {
  reviews: IReviews[];
}

const DetailReviews = ({ reviews }: IProps) => {
  return (
    <Container>
      <div className="inner">
        <div className="wrap">
          <h1>
            먼저 트레이닝 받은 분들의
            <br />
            이야기를 들어보세요.
          </h1>

          <div className="reviews">
            {reviews &&
              reviews.map((review, index) => (
                <ReviewCard key={index} review={review} />
              ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default DetailReviews;

const Container = styled.section`
  position: relative;
  width: 100%;
  padding: 60px 0;
  background-color: rgba(0, 132, 173, 0.06);

  h1 {
    font-size: 22px;
    line-height: 28px;
    margin-bottom: 24px;
  }

  .reviews {
    column-count: 2;
    column-gap: 16px;

    article:first-child {
      padding-bottom: 20px;
      &::before {
        content: '⭐️';
        font-size: 22px;
      }
    }

    article:last-child {
      padding-bottom: 20px;
      &::before {
        content: '👍';
        font-size: 22px;
      }
    }
  }
`;
