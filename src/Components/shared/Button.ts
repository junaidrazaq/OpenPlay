import React from "react";
import styled from "styled-components";
import { boxShadow, horizontalFlex } from "./styles";

// ==========================================================
// == < Button /> ===========================================
// ==========================================================

interface ButtonProps {
  color?: string; // text color
  bgColor?: string; // custom bg color
  disabled?: boolean; // make button disabled | !disabled
  children?: React.ReactNode; // children elements
  horizontal?: boolean; // make elements flex-horizontal
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; // onClick functions
}

// == Styled-Button-Component == \\
const Button = styled.button<ButtonProps>`
  padding: 1em 2em;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.05rem;
  box-shadow: ${boxShadow};
  transition: 0.2s ease-in-out;
  color: ${({ color }) => color || "#444"}; // Text Color
  background-color: ${({ bgColor }) => bgColor || "transparent"};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  ${({ horizontal }) => (horizontal ? horizontalFlex : "")}

  &:hover {
    box-shadow: 1px 1px 10px 0 rgba(0, 0, 0, 0.15),
      -8px -8px 12px 0 rgba(255, 255, 255, 0.3);
    transform: translateY(0.1rem);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &:active {
    box-shadow: 1px 1px 3px 0 rgba(0, 0, 0, 0.1),
      -8px -8px 12px 0 rgba(255, 255, 255, 0.3);
    transform: translateY(0.1rem);
  }
`;

export default Button;
