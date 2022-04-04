import styled from 'styled-components';
import { IReviews } from 'types/CampDetail';
import Review from './Review';

interface IProps {
  reviews: IReviews[];
}

const Reviews = ({ reviews }: IProps) => {
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
                <Review key={index} review={review} />
              ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Reviews;

const Container = styled.section`
  position: relative;
  width: 100%;
  margin: 40px 0;
  padding: 24px;
  background-color: rgba(0, 132, 173, 0.06);

  h1 {
    font-size: 22px;
    line-height: 28px;
    margin-bottom: 24px;
  }

  .reviews {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
  }
`;
