import styled, { css } from 'styled-components';

const Padding = ({ height, width }: { height?: string; width?: string }) => {
  return <Container height={height} width={width}></Container>;
};

export default Padding;

const Container = styled.div<{ height?: string; width?: string }>`
  ${props =>
    props.height &&
    css`
      height: ${props.height};
    `}
  ${props =>
    props.width &&
    css`
      width: ${props.width};
    `}
`;
