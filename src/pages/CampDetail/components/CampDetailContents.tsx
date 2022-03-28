import styled from 'styled-components';

const CampDetailContents = () => {
  return (
    <Container>
      <article>
        <h1 className="title">대답없는 VOD 강의에 라이브로 답하다.</h1>
        <p>
          React만큼은 실무에 제대로 활용할 수 있도록, 오프라인 강의와 온라인
          VOD의 장점만 모았습니다.
        </p>
      </article>
    </Container>
  );
};

export default CampDetailContents;

const Container = styled.section`
  width: calc(100% - 450px);
`;
