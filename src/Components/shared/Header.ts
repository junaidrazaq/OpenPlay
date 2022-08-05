import styled from "styled-components";

const Header = styled.h2`
  font-weight: 800;
  color: #000;
  font-size: 2rem;
  letter-spacing: 1px;
  padding-top: 10px;
`;

export const Title = styled(Header)`
  font-size: 1.2rem;
  font-weight: 600;
  padding: 0;
  color: #333;
`;

interface SubHeaderProps {
  mt?: string;
  mb?: string;
  center?: boolean;
  color?: string;
}

export const SubHeader = styled(Header)<SubHeaderProps>`
  font-size: 0.9rem;
  font-weight: 500;
  padding: 0;
  padding-top: 2px;
  color: ${({ color }) => color || "#999"};
  text-align: ${({ center }) => center && "center"};
  margin-top: ${({ mt }) => mt || "0"};
  margin-bottom: ${({ mb }) => mb || "0"};
`;

export default Header;
