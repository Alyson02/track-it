/* eslint-disable react-hooks/exhaustive-deps */
import { useTrack } from "context/TrackProvider.js/useTrack";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { Api } from "services/api";
import H1 from "shared/components/H1";
import H2 from "shared/components/H2";
import Loader from "shared/components/Loader";
import styled from "styled-components";
import Habito from "./components/Habito";
import "dayjs/locale/pt-br";

export default function Hoje() {
  const track = useTrack();
  const [final, setFinal] = useState(false);

  console.log(dayjs().locale("pt-br"));

  useEffect(() => {
    Api.get("/habits/today")
      .then((r) => track.setHabitos(r.data))
      .catch(() => {});

    if (final === true) setFinal(false);
  }, [final]);

  return (
    <>
      {track.completedHabito === null ? (
        <Loader />
      ) : (
        <ContainerHabito>
          <H1 cor="#126BA5" data-identifier="today-infos">
            {dayjs().locale("pt-br").format("dddd DD/MM")}
          </H1>
          {track.completedHabito === 0 ? (
            <H2 data-identifier="today-infos" cor="#BABABA">
              Nenhum hábito concluído ainda
            </H2>
          ) : (
            <H2 data-identifier="today-infos" cor="#8FC549">
              {((track.completedHabito * 100) / track.sizeHabitos).toFixed(0)}%
              dos hábitos concluídos
            </H2>
          )}
          <HabitosContainer>
            {track.habitos.length > 0 &&
              track.habitos.map((habito) => (
                <Habito
                  track={track}
                  setFinal={setFinal}
                  habito={habito}
                  key={habito.id}
                />
              ))}
          </HabitosContainer>
        </ContainerHabito>
      )}
    </>
  );
}

const ContainerHabito = styled.div`
  padding: 22px 18px 0 22px;
`;

const HabitosContainer = styled.ul`
  padding: 28px 0 0 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
