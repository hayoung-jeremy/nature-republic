import React from "react";

import styled, { css } from "styled-components";
import { lighten, darken, rgba } from "polished";

interface commonProps {
  children?: React.ReactNode;
  color?: "main" | "grayScale" | "complete" | "success" | "warning" | "error";
  size?: "small" | "medium" | "large";
  isAnchor?: boolean;
  isOpenedWithNewTab?: boolean;
  href?: string;
  onClick?: () => void;
  fullWidth?: boolean;
  rounded?: boolean;
  outline?: boolean;
  disabled?: boolean;
  grayToMain?: boolean;
}

const commonStyles = css<commonProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.15s;

  ${(props) =>
    props.disabled &&
    css`
      cursor: not-allowed;
    `}

  &:not(:first-of-type),
  a ~ &,
  & ~ a {
    margin-left: 12px;
  }
`;

const colorStyles = css<commonProps>`
  ${({ theme, color }) => {
    const buttonColor = theme.palette[color!];
    const grayScaledColor = theme.palette.grayScale;
    return css`
      background-color: ${buttonColor};
      &:hover {
        background-color: ${color === "grayScale"
          ? lighten(0.04, buttonColor)
          : lighten(0.08, buttonColor)};
      }
      &:active {
        background-color: ${color === "grayScale"
          ? darken(0.02, buttonColor)
          : darken(0.08, buttonColor)};
      }

      // outline
      ${(props: commonProps) =>
        props.outline &&
        css`
          color: ${darken(0.12, buttonColor)};
          border: 1px solid ${buttonColor};
          background-color: ${rgba(buttonColor, 0)};
          &:hover {
            background-color: ${rgba(buttonColor, 0.1)};
          }
          &:active {
            background-color: ${darken(0.2, rgba(buttonColor, 0.1))};
          }
        `}
      ${(props: commonProps) =>
        props.grayToMain &&
        css`
          color: ${grayScaledColor};
          border: 1px solid ${grayScaledColor};
          background-color: transparent;
          &:hover {
            background-color: transparent;
            color: ${darken(0.12, buttonColor)};
            border: 1px solid ${darken(0.12, buttonColor)};
          }
          &:active {
            background-color: ${darken(0.2, rgba(buttonColor, 0.05))};
          }
        `}
    `;
  }}
`;

const sizes = {
  large: {
    height: "56px",
    fontSize: "16px",
    padding: "12px 36px",
  },
  medium: {
    height: "40px",
    fontSize: "14px",
    padding: "12px 24px",
  },
  small: {
    height: "24px",
    fontSize: "10px",
    padding: "8px 12px",
  },
};

const sizeStyles = css<commonProps>`
  ${({ size }) => css`
    height: ${sizes[size!].height};
    padding: ${sizes[size!].padding};
    font-size: ${sizes[size!].fontSize};
  `}
`;

const fullWidthStyle = css<commonProps>`
  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
      &:not(:first-of-type) {
        margin-left: 0;
        margin-top: 1em;
      }
    `}
`;

const roundedStyles = css<commonProps>`
  ${({ rounded, size }) =>
    rounded &&
    css`
      padding: ${sizes[size!].padding};
      border-radius: ${sizes[size!].height};
    `}
`;

const StyledButton = styled.button`
  ${commonStyles}
  ${colorStyles}
  ${sizeStyles}
  ${fullWidthStyle}
  ${roundedStyles}
`;

const Anchor = StyledButton.withComponent("a");

const Button = ({
  children,
  color = "main",
  size = "medium",
  isAnchor,
  isOpenedWithNewTab,
  href,
  onClick,
  fullWidth = false,
  rounded = false,
  outline = false,
  grayToMain = false,
  ...rest
}: commonProps) => {
  return isAnchor ? (
    <Anchor
      color={color}
      size={size}
      href={href}
      target={isOpenedWithNewTab ? `_blank` : ""}
      fullWidth={fullWidth}
      rounded={rounded}
      outline={outline}
      grayToMain={grayToMain}
      {...rest}
    >
      {children}
    </Anchor>
  ) : (
    <StyledButton
      color={color}
      size={size}
      onClick={onClick}
      fullWidth={fullWidth}
      rounded={rounded}
      outline={outline}
      grayToMain={grayToMain}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
