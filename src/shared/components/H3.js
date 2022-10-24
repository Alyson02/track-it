const { default: styled } = require("styled-components");

const H3 = styled.h3`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 17.976px;
  line-height: 22px;
  color: ${({ cor }) => cor};
`;

export default H3;
