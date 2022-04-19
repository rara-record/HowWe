import { FAQ } from 'components';
import { maxWidth } from 'styles/mixin';
import { IFaqs } from 'types/CampDetail';
import styled, { css } from 'styled-components';
import { useMediaQuery } from 'react-responsive';

interface IProps {
  faqs: IFaqs[];
}

const FaqSection = ({ faqs }: IProps) => {
  const isMobile = useMediaQuery({
    query: '(max-width: 768px)',
  });

  return (
    <Container isMobile={isMobile}>
      <div className="faq-box">
        <div className="row">
          <Title>FAQ</Title>
          {faqs.map((faq, index) => (
            <FAQ key={index} faq={faq}></FAQ>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default FaqSection;

const Container = styled.section<{ isMobile: boolean }>`
  padding: 60px 0;
  background-color: rgb(252, 252, 252);

  .faq-box {
    ${maxWidth}
    display: flex;
    margin: 0 auto;
    padding: 0 16px;
  }

  .row {
    ${props =>
      !props.isMobile &&
      css`
        flex: 0 0 66.6666%;
      `}
  }
`;

const Title = styled.h4`
  padding-bottom: 18px;
  font-size: 22px;
  font-weight: 600px;
  line-height: 28px;
  ${maxWidth}
`;
