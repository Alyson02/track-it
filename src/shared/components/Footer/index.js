import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import "react-circular-progressbar/dist/styles.css";
import ProgressProvider from "./ProgesssProvider";
import { useTrack } from "context/TrackProvider.js/useTrack";

export default function Footer() {
  // eslint-disable-next-line no-unused-vars
  const track = useTrack();

  return (
    <Container>
      <NavLink to={"/habitos"} data-identifier="habit-page-action">
        <Text>Hábitos</Text>
      </NavLink>
      <CircleWrapper>
        <NavLink to="/">
          <ProgressProvider
            valueStart={0}
            valueEnd={(
              (track.completedHabito * 100) /
              track.sizeHabitos
            ).toFixed(0)}
          >
            {(value) => (
              <CircularProgressbar
                value={value}
                text="Hoje"
                background
                backgroundPadding={6}
                styles={buildStyles({
                  backgroundColor: "#52B6FF",
                  textColor: "#fff",
                  pathColor: "#fff",
                  trailColor: "transparent",
                })}
              />
            )}
          </ProgressProvider>
        </NavLink>
      </CircleWrapper>
      <NavLink to="/historico">
        <Text data-identifier="historic-page-action">Histórico</Text>
      </NavLink>
    </Container>
  );
}

const Container = styled.footer`
  background: #fff;
  height: 70px;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  z-index: 1000;

  @media (max-width: 320px) {
    padding: 0 16px;
  }
`;

const CircleWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 91px;
  height: 91px;
  bottom: 20px;
`;

const Text = styled.div`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 17.976px;
  line-height: 22px;
  color: #52b6ff;
`;
