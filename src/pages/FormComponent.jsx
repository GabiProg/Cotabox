import { useRef } from "react";
import api from "../services/api";

function FormComponent({ setParticipations }) {
  const inputFirstName = useRef();
  const inputLastName = useRef();
  const inputParticipationPorcentage = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      firstName: inputFirstName.current.value,
      lastName: inputLastName.current.value,
      participationPorcentage: Number(
        inputParticipationPorcentage.current.value
      ),
    };

    try {
      const response = await api.post("/", data);
      const newParticipation = response.data;

      setParticipations((prev) => [...prev, newParticipation]);

      inputFirstName.current.value = "";
      inputLastName.current.value = "";
      inputParticipationPorcentage.current.value = "";

    } catch (error) {
      alert("Erro ao enviar os dados. Tente novamente.");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="First name"
          placeholder="First name"
          type="text"
          ref={inputFirstName}
        />
        <input
          name="Last name"
          placeholder="Last name"
          type="text"
          ref={inputLastName}
        />
        <input
          name="Participation"
          placeholder="Participation"
          type="number"
          ref={inputParticipationPorcentage}
        />
        <button type="submit">SEND</button>
      </form>
    </>
  );
}

export default FormComponent;
