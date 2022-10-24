import { Calendar } from "react-calendar";
import H1 from "shared/components/H1";
import styled from "styled-components";
import "react-calendar/dist/Calendar.css";
import { useEffect, useState } from "react";
import { Api } from "services/api";
import dayjs from "dayjs";

export default function Historico() {
  const [diasHabitos, setDiasHabitos] = useState([]);
  console.log(diasHabitos);

  useEffect(() => {
    Api.get("/habits/history/daily").then((r) => setDiasHabitos(r.data));
  }, []);

  const diasCompletos = diasHabitos.filter((d) => !d.habits.some(x => x.done === false));
  const diasIncompletos = diasHabitos.filter((d) => d.habits.some(x => x.done === false));

  console.log(diasCompletos)
  console.log(diasIncompletos)

  return (
    <>
      <ContainerHistorico>
        <H1 cor="#126BA5">Histórico</H1>
        <Calendar
          locale="pt-br"
          formatDay={(locale, date) => {
            let cor = "";
            let data = dayjs(date).format("DD/MM/YYYY");

            if (diasCompletos.some((d) => d.day === data)) {
              cor = "#8CC654";
            } else if (diasIncompletos.some((d) => d.day === data)) {
              cor = "#EA5766";
            }

            return <Day cor={cor}>{dayjs(date).format("DD")}</Day>;
          }}
        />
      </ContainerHistorico>
    </>
  );
}

const ContainerHistorico = styled.div`
  padding: 22px 18px 0 22px;

  h1 {
    margin-bottom: 18px;
  }
`;

const Day = styled.div`
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ cor }) => cor};
`;
