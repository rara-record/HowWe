import { FAQ } from 'components';
import styled from 'styled-components';
import { maxWidth } from 'styles/mixin';
import { IFaqs } from 'types/CampDetail';

interface IProps {
  faqs: IFaqs[];
}

const DetailFaqs = ({ faqs }: IProps) => {
  return (
    <Container>
      <div className="inner">
        <div className="wrap">
          <h4>FAQ</h4>
          {faqs.map((faq, index) => (
            <FAQ key={index} faq={faq}></FAQ>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default DetailFaqs;

const Container = styled.section`
  padding: 60px 0;
  background-color: rgb(252, 252, 252);

  h4 {
    padding-bottom: 18px;
    font-size: 22px;
    font-weight: 600px;
    line-height: 28px;
    ${maxWidth}
  }
`;
