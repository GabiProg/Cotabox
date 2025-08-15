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
              </tr>
            </thead>
            <tbody>
              {participations.map((item, index) => (
                <ListComponent
                  key={item.id}
                  index={index + 1}
                  firstName={item.firstName}
                  lastName={item.lastName}
                  participation={item.participationPorcentage}
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
