const { default: styled } = require("styled-components");

const H2 = styled.h2`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 19.976px;
  line-height: 25px;
  color: ${({ cor }) => cor};
`;

export default H2;