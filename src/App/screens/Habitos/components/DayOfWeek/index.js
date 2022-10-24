import H2 from "shared/components/H2";
import styled from "styled-components";

export default function DayOfWeek({ day, dayChosen, disabled }) {
  return (
    <SelectorDateWeek dayChosen={dayChosen}>
      <NameSelector cor={dayChosen === true ? "#fff" : "#DBDBDB"}>
        {day}
      </NameSelector>
    </SelectorDateWeek>
  );
}

const NameSelector = styled(H2)`
  text-align: center;
`;

const SelectorDateWeek = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  width: 30px;
  height: 30px;
  display: inline-block;
  ${({ dayChosen }) =>
    dayChosen ? "background-color: #CFCFCF;" : "background-color: #fff"}
`;
