import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { toast } from "react-toastify";
import { Api } from "services/api";
import Input from "shared/components/Input";
import { daysOfWeek } from "shared/constants";
import DayOfWeek from "../DayOfWeek";
import {
  BtnSave,
  ButtonOutLine,
  SectionFormHabito,
  WrapperBtn,
  WrapperDaysOfWeek,
} from "./styled";

export default function FormHabito({ setCreating, setFinish, visible }) {
  const [name, setName] = useState("");
  const [days, setDays] = useState([]);
  const [loading, setLoading] = useState(false);

  function addOrRemoveDay(idx) {
    if (days.includes(idx)) {
      setDays(days.filter((x) => x !== idx));
    } else {
      setDays([...days, idx]);
    }
  }

  function saveHabito() {
    setLoading(true);
    Api.post("habits", {
      name,
      days,
    })
      .then(() => {
        setCreating(false);
        setFinish(true);
        setLoading(false);
        setName("");
        setDays([]);
      })
      .catch(() => {
        toast.error("Algo deu errado", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setCreating(false);
        setFinish(true);
      });
  }

  return (
    <SectionFormHabito visible={visible}>
      <div>
        <Input
          data-identifier="input-habit-name"
          h="45"
          placeholder="nome do hábito"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={loading}
        />
        <WrapperDaysOfWeek>
          {daysOfWeek.map((day, i) => (
            <span
              data-identifier="week-day-btn"
              onClick={() => addOrRemoveDay(i)}
              key={i}
            >
              <DayOfWeek
                disabled={loading}
                dayChosen={days.includes(i)}
                day={day}
              />
            </span>
          ))}
        </WrapperDaysOfWeek>
      </div>
      <WrapperBtn>
        <ButtonOutLine
          data-identifier="cancel-habit-create-btn"
          disabled={loading}
          onClick={() => setCreating(false)}
        >
          Cancelar
        </ButtonOutLine>
        <BtnSave w="84" h="35" onClick={saveHabito} disabled={loading}>
          {loading ? (
            <ThreeDots
              data-identifier="save-habit-create-btn"
              height="13"
              width="51"
              radius="9"
              color="#fff"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          ) : (
            "Salvar"
          )}
        </BtnSave>
      </WrapperBtn>
    </SectionFormHabito>
  );
}
