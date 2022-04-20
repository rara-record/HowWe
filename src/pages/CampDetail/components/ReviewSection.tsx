import { maxWidth } from 'styles/mixin';
import styled, { css } from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import ReviewCard from 'components/UI/Card/ReviewCard';
import { IReviews, ITheme } from 'types/CampDetail';

interface IProps {
  reviews: IReviews[];
  theme: ITheme[];
}

const ReviewSection = ({ reviews, theme }: IProps) => {
  const { reviewColor } = theme[0];

  const isMobile = useMediaQuery({
    query: '(max-width: 768px)',
  });

  return (
    <Container reviewColor={reviewColor} isMobile={isMobile}>
      <div className="review-box">
        <div className="row">
          <h1>
            먼저 트레이닝 받은 분들의
            <br />
            이야기를 들어보세요.
          </h1>

          <ReviewList isMobile={isMobile}>
            {reviews &&
              reviews.map((review, index) => (
                <ReviewCard key={index} review={review} />
              ))}
          </ReviewList>
        </div>
      </div>
    </Container>
  );
};

export default ReviewSection;

const Container = styled.section<{ reviewColor: string; isMobile: boolean }>`
  width: 100%;
  padding: 60px 0;

  ${props =>
    props.reviewColor &&
    css`
      background-color: ${props.reviewColor};
    `}

  .review-box {
    padding: 0 16px;

    ${props =>
      !props.isMobile &&
      css`
        ${maxWidth}
        display: flex;
        margin: 0 auto;
      `}
  }

  .row {
    ${props =>
      !props.isMobile &&
      css`
        flex: 0 0 66.6666%;
      `}
  }

  h1 {
    font-size: 22px;
    line-height: 28px;
    margin-bottom: 24px;
  }
`;

const ReviewList = styled.div<{ isMobile: boolean }>`
  ${props =>
    !props.isMobile &&
    css`
      column-count: 2;
      column-gap: 16px;
    `}

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
`;
