function ListComponent({ index, firstName, lastName, participation }) {
  return (
    <tr>
      <td id="quantity-table-numbers">{index}</td>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td id="participation-table-percentage">{participation}%</td>
    </tr>
  );
}

export default ListComponent;
