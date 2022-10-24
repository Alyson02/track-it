import styled from "styled-components";

const Btn = styled.button`
  width: ${({ w }) => w}px;
  height: ${({ h }) => h}px;
  background: #52b6ff;
  border-radius: 4.63636px;
  font-weight: 400;
  font-size: 20.976px;
  line-height: 26px;
  color: #ffffff;
  font-family: "Lexend Deca";
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;

  &:disabled {
    filter: opacity(0.8);
  }

  @media (max-width: ${({ w }) => w}px) {
    width: 100%;
  }
`;

export default Btn;
