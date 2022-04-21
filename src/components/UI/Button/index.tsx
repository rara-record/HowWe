import React from 'react';
import styled, { css } from 'styled-components';
import { darken } from 'polished';
import button from '../../../styles/button';

interface IProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  color: string;
  size: string;
  outline: boolean;
  fullWidth: boolean;
}

const Button = ({
  children,
  color,
  size,
  outline,
  fullWidth,
  ...rest
}: IProps) => {
  return (
    <StyledButton
      {...rest}
      color={color}
      size={size}
      outline={outline}
      fullWidth={fullWidth}
    >
      {children}
    </StyledButton>
  );
};

export default Button;

Button.defaultProps = {
  color: 'blue',
  size: 'medium',
  outline: false,
  fullWidth: false,
};

const colorStyles = css<{ color: string; outline: boolean }>`
  ${props => {
    const selected = button.palette[props.color];
    return props.outline
      ? css`
          color: ${selected};
          background: none;
          border: 1px solid ${selected};
          &:active {
            background: ${selected};
            color: white;
          }
        `
      : css`
          color: white;
          background: ${selected};
          &:hover {
            background: ${darken(0.1, selected)};
          }
          &:active {
            background: ${darken(0.1, selected)};
          }
        `;
  }}
`;

const sizeStyles = css<{ size: string }>`
  ${({ size }) => css`
    height: ${button.sizes[size].height};
    font-size: ${button.sizes[size].fontSize};
    font-weight: ${button.sizes[size].fontWeight};
  `}
`;

const fullWidthStyle = css<{ fullWidth: boolean }>`
  ${props =>
    props.fullWidth &&
    css`
      width: 100%;
      justify-content: center;

      &:not(:first-child) {
        margin-left: 0;
        margin-top: 1rem;
      }
    `}
`;

const StyledButton = styled.button<{
  color: string;
  size: string;
  outline: boolean;
  fullWidth: boolean;
}>`
  /* 공통 스타일 */
  display: inline-flex;
  align-items: center;
  outline: none;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  /* 크기 */
  ${sizeStyles}

  /* 색상 */
  ${colorStyles}

  /* width 100% 버튼 스타일 */
  ${fullWidthStyle}
`;
