import { useEffect, useState } from "react";
import "./style.css";
import FormComponent from "./FormComponent"
import ChartComponent from "./ChartComponent";
import ListComponent from "./ListComponent";
import api from "../services/api";

function App() {
  const [participations, setParticipations] = useState([]);

  async function getParticipations() {
    const participationsApiData = await api.get("/");
    setParticipations(participationsApiData.data);
    console.log(participationsApiData.data);
  }

  useEffect(() => {
    getParticipations();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Tem certeza que deseja excluir este participante?");
    if (!confirmDelete) return;
  
    try {
      const response = await fetch(`http://localhost:3000/participation/${id}`, {
        method: "DELETE",
      });
  
      if (response.ok) {
        setParticipations(prev => prev.filter(p => p._id !== id));
      } else {
        const errorData = await response.json();
        alert("Erro: " + errorData.message);
      }
    } catch (error) {
      console.error(error);
      alert("Erro de conexão.");
    }
  };

  return (
    <div className="app-container">
      <div className="participation-form-header">
        <FormComponent setParticipations={setParticipations}/>
      </div>
      <div className="app-header">
        <h3>DATA</h3>
        <p id="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="participation-data">
        <div className="participants-list">
          <table>
            <thead>
              <tr>
                <th id="quantity-table"></th>
                <th>First name</th>
                <th>Last name</th>
                <th id="participation-table">Participation</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {participations.map((item, index) => (
                <ListComponent
                  key={item.id}
                  id={item._id}
                  index={index + 1}
                  firstName={item.firstName}
                  lastName={item.lastName}
                  participation={item.participationPorcentage}
                  onDelete={handleDelete}
                />
              ))}
            </tbody>
          </table>
        </div>
        <div className="participation-graph">
          <ChartComponent
            participations={participations.map(
              (item) => item.participationPorcentage
            )}
            labels={participations.map(
              (item) => `${item.firstName} ${item.lastName}`
            )}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
