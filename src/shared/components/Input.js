import styled from "styled-components";

const Input = styled.input`
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  width: ${({ w }) => (w === undefined ? "100%" : w + "px")};
  height: ${({ h }) => h}px;
  outline: none;
  padding-left: 12px;
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 19.976px;
  line-height: 25px;
  color: #dbdbdb !important;

  &::placeholder {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #dbdbdb;
  }

  &:disabled {
    filter: opacity(0.8);
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    -webkit-text-fill-color: #dbdbdb;
    -webkit-box-shadow: 0 0 0px 1000px #fff inset;
    font-size: 19px;
  }

  @media (max-width: ${({ w }) => w}px) {
    width: 100%;
  }
`;

export default Input;
