import styled from "styled-components";

interface Props {
  direction?: "row" | "column";
  gap?: string;
  mt?: string;
  responsive?: boolean;
  hover?: boolean;
  alignSelf?: "flex-start" | "flex-end" | "center" | "stretch";
}

const Flex = styled.div<Props>`
  display: flex;
  flex-direction: ${({ direction }) => direction || "column"};
  gap: ${({ gap }) => gap || "0"};
  align-items: center;
  align-self: ${({ alignSelf }) => alignSelf || "center"};
  margin-top: ${({ mt }) => mt || "0"};
  transition: 0.2s ease-in-out;

  :hover {
    ${({ hover }) => (hover ? "cursor: pointer; transform: scale(1.04);" : "")}
  }

  & > div,
  & > ul {
    flex: 1;
  }
  & > div > h1 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 10px;
  }
  & > div > p {
    font-size: 1rem;
    margin-bottom: 10px;
    color: #999;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: ${({ responsive }) => responsive && "column"};
    align-items: flex-start;
    align-self: flex-start;
  }
`;

export default Flex;
