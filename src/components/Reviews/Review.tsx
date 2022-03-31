import styled from 'styled-components';
import { IReviews } from 'types/CampDetail';

const Review = ({ review }: { review: IReviews }) => {
  /*
    // TODO: 받아와진 데이터에 문자열로 된 태그가 껴있어서, 그걸 지우려고 함수를 만들었는데,
    알고보니 string 형태를 html로 렌더링 하는 방법이 있어서 그걸로 바꿔주었다 ㅎ;
    // dangerouslySetInnerHTML : innerHTML을 사용하기 위한 React의 대체 방법

    const sliceText = (reviewText: string) => {
      let text = reviewText;
      let newText = text
        .replace(/br|<|>|b|/g, '')
        .split('/')
        .join(' ');
      return (text = newText);
    };
  */

  return (
    <Container>
      {review && (
        <div dangerouslySetInnerHTML={{ __html: review.content }}></div>
      )}
      {review && <span>{review.reviewer}</span>}
    </Container>
  );
};

export default Review;

const Container = styled.article`
  width: calc(50% - 15px);
  padding: 24px;
  background-color: rgb(255, 255, 255);
  border-radius: 2px;
  margin-bottom: 16px;

  p {
    word-break: keep-all;
    word-wrap: break-word;
    font-size: 16px;
    line-height: 25px;
    font-weight: 400;
    letter-spacing: 0.02em;
  }
`;
