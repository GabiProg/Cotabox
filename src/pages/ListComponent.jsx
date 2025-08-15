import Trash from '../assets/trash-can.png';

function ListComponent({ id, index, firstName, lastName, participation, onDelete }) {
  return (
    <tr>
      <td id="quantity-table-numbers">{index}</td>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td id="participation-table-percentage">{participation}%</td>
      <td id="trash">
        <img src={Trash} style={{width:"20px", height:"20px"}} onClick={() => onDelete(id)}/>
      </td>
    </tr>
  );
}

export default ListComponent;
