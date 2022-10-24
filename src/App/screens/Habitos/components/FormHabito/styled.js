import Btn from "shared/components/Btn";

const { default: ContainerCol } = require("shared/components/ContainerCol");
const { default: ContainerRow } = require("shared/components/ContainerRow");
const { default: styled } = require("styled-components");

export const BtnSave = styled(Btn)`
  font-size: 15.976px;
`;

export const SectionFormHabito = styled(ContainerCol)`
  padding: 18px;
  gap: 29px;
  background-color: #fff;
  margin-top: 20px;
  border-radius: 5px;
  transition: 0.4s all ease-out;
  ${({ visible }) => !visible && "display: none"}
`;

export const WrapperDaysOfWeek = styled.div`
  display: flex;
  justify-content: flex-start;
  column-gap: 4px;
  flex-wrap: wrap;
  margin-top: 8px;
`;

export const WrapperBtn = styled(ContainerRow)`
  justify-content: flex-end;
  gap: 23px;
  align-items: center;
`;

export const ButtonOutLine = styled.button`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 15.976px;
  line-height: 20px;
  color: #52b6ff;
  background: none;
  border: none;
`;
