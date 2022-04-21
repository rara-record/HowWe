import styled from 'styled-components';
import { maxWidth } from 'styles/mixin';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { useRef, useState } from 'react';

const Faq = ({ faq }) => {
  const toggleRef = useRef(null);
  const [isOn, setIsOn] = useState<boolean>(false);

  const onClickToggle = () => setIsOn(!isOn);

  return (
    <Container>
      <ListItem ref={toggleRef} onClick={onClickToggle}>
        <Question>
          <span>Q.&nbsp;</span>
          <p>{faq.question}</p>

          <ButtonToggle>
            <FontAwesomeIcon
              className={`${isOn ? 'click-active' : 'click-none'}`}
              icon={faAngleDown}
              size="1x"
              color="#555"
            />
          </ButtonToggle>
        </Question>

        <Answer className={` ${isOn ? 'block' : 'none'}`}>
          <span>A.</span>
          <p>{faq.answer}</p>
        </Answer>
      </ListItem>
    </Container>
  );
};

export default Faq;

const Container = styled.ul`
  ${maxWidth}
  font-size: 16px;
  line-height: 25px;
  letter-spacing: 0.02em;
`;

const ListItem = styled.li``;

const Question = styled.div`
  position: relative;
  display: flex;
  padding: 18px 0;
  margin-bottom: 12px;
  font-weight: 600;

  border-bottom: 1px solid #eaecee;
  cursor: pointer;
`;

const Answer = styled.div`
  position: relative;
  display: flex;
  font-weight: 400;
  color: #3c4144;
  transition: height 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;

  &.block {
    height: 100px;
  }

  &.none {
    height: 0;
  }

  span {
    padding-right: 4px;
  }
`;

const ButtonToggle = styled.button`
  position: absolute;
  right: 0;
  fill: rgb(118, 125, 130);
`;
