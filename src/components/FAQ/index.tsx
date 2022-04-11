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
      <ul>
        <li ref={toggleRef} onClick={onClickToggle}>
          <div className="question">
            <span>Q.</span>
            <p>{faq.question}</p>
            <button className="btn-icon-toggle">
              <FontAwesomeIcon
                className={`${isOn ? 'click-active' : 'click-none'}`}
                icon={faAngleDown}
                size="1x"
                color="#555"
              />
            </button>
          </div>

          <div className={`answer ${isOn ? 'block' : 'none'}`}>
            <span>A.</span>
            <p>{faq.answer}</p>
          </div>
        </li>
      </ul>
    </Container>
  );
};

export default Faq;

const Container = styled.div`
  ${maxWidth}
  font-size: 16px;
  line-height: 25px;
  letter-spacing: 0.02em;

  .question {
    position: relative;
    display: flex;
    padding: 18px 0;
    margin-bottom: 12px;
    font-weight: 600;
    color: rgb(32, 35, 37);
    border-bottom: 1px solid #eaecee;
    cursor: pointer;
  }

  .answer {
    position: relative;
    display: flex;
    font-weight: 400;
    color: rgb(60, 65, 68);
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
  }

  .btn-icon-toggle {
    position: absolute;
    right: 0;
    fill: rgb(118, 125, 130);
  }
`;
