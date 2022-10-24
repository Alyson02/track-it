import { useEffect, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Api } from "services/api";
import ContainerRow from "shared/components/ContainerRow";
import H1 from "shared/components/H1";
import H2 from "shared/components/H2";
import Loader from "shared/components/Loader";
import styled from "styled-components";
import FormHabito from "./components/FormHabito";
import Habito from "./components/Habito";
import "./style.css";

export default function Habitos() {
  const [habitos, setHabitos] = useState(null);
  const [creating, setCreating] = useState(false);
  const [finish, setFinish] = useState(false);

  useEffect(() => {
    Api.get("/habits").then((r) => setHabitos(r.data));
    setFinish(false);
  }, [finish]);

  return (
    <>
      {habitos === null ? (
        <Loader />
      ) : (
        <ContainerHabitos>
          <AddHabitoWrapper>
            <H1 cor="#126BA5">Meus hábitos</H1>
            <BtnAdd
              data-identifier="create-habit-btn"
              onClick={() => setCreating(true)}
            >
              +
            </BtnAdd>
          </AddHabitoWrapper>

          <FormHabito
            visible={creating}
            setCreating={setCreating}
            setFinish={setFinish}
          />

          {habitos.length > 0 ? (
            <TransitionGroup component="ul">
              {habitos.map((habito) => (
                <CSSTransition classNames="item" timeout={700} key={habito.id}>
                  <Habito
                    habito={habito}
                    habitos={habitos}
                    setHabitos={setHabitos}
                  />
                </CSSTransition>
              ))}
            </TransitionGroup>
          ) : (
            <EmptyMessage>
              <H2 data-identifier="no-habit-message" cor="#666666">
                Você não tem nenhum hábito cadastrado ainda. Adicione um hábito
                para começar a trackear!
              </H2>
            </EmptyMessage>
          )}
        </ContainerHabitos>
      )}
    </>
  );
}

const ContainerHabitos = styled.div`
  padding: 22px 18px 0 22px;
`;

const AddHabitoWrapper = styled(ContainerRow)`
  justify-content: space-between;
  align-items: center;
`;

const BtnAdd = styled.button`
  width: 40px;
  height: 35x;
  color: white;
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 34px;
  background: #52b6ff;
  border-radius: 4.63636px;
  border: none;
`;

const EmptyMessage = styled.div`
  margin-top: 28px;
`;
