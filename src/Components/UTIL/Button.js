import styled from "styled-components";

const Button = styled.button`
  width: 6rem;
  height: 2.8rem;
  border-radius: 6px;
  background-color: ${(props) => props.backgroundColor};
  font-weight: 600;
  color: ${(props) => props.primary};
`;

export { Button };
