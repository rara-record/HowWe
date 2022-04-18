import styled, { css } from 'styled-components';
import { IReviews, ITheme } from 'types/CampDetail';
import ReviewCard from 'components/ReviewCard';

interface IProps {
  reviews: IReviews[];
  theme: ITheme[];
}

const DetailReviews = ({ reviews, theme }: IProps) => {
  const { reviewColor } = theme[0];

  return (
    <Container reviewColor={reviewColor}>
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

const Container = styled.div<{ reviewColor: string }>`
  position: relative;
  width: 100%;
  padding: 60px 0;

  ${props =>
    props.reviewColor &&
    css`
      background-color: ${props.reviewColor};
    `}

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
