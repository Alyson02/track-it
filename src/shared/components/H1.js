const { default: styled } = require("styled-components");

const H1 = styled.h1`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 22.976px;
  line-height: 29px;
  color: ${({ cor }) => cor};
`;

export default H1;