import styled, { css } from 'styled-components';
import tags from '../../../styles/tags';

interface IProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  color: string;
  size: string;
  font: string;
  outline: boolean;
}

const Tag = ({ children, color, size, outline, font, ...rest }: IProps) => {
  return (
    <StyledTag
      {...rest}
      color={color}
      size={size}
      font={font}
      outline={outline}
    >
      {children}
    </StyledTag>
  );
};

Tag.defaultProps = {
  color: 'primary1',
  size: 'medium',
  font: 'white',
  outline: false,
};

const colorStyles = css<{ color: string; outline: boolean; font: string }>`
  ${props => {
    const selectedColor = tags.palette[props.color];
    const selectedFont = tags.palette[props.font];

    return props.outline
      ? css`
          color: ${selectedColor};
          background: none;
          border: 1px solid ${selectedColor};
        `
      : css`
          color: ${selectedFont};
          background: ${selectedColor};
        `;
  }}
`;

const sizeStyles = css<{ size: string }>`
  ${({ size }) => css`
    height: ${tags.sizes[size].height};
    font-size: ${tags.sizes[size].fontSize};
    padding: ${tags.sizes[size].padding};
    font-weight: ${tags.sizes[size].fontWeight};
    line-height: ${tags.sizes[size].lineHeight};
  `}
`;

export default Tag;

const StyledTag = styled.span<{
  color: string;
  size: string;
  font: string;
  outline: boolean;
}>`
  /* 공통 스타일 */
  display: inline-flex;
  gap: 8px;
  border-radius: 4px;

  /* 색상 */
  ${colorStyles}

  /* 크기 */
  ${sizeStyles}

  /* 기타 */
  & + & {
    margin-left: 0.5rem;
  }
`;
