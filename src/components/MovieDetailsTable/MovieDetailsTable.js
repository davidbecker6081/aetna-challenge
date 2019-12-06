import React from 'react';
import './MovieDetailsTable.scss';

const createTableRows = (tableRows) => {
  return tableRows.map((row, i) =>
    <tr key={i}>
      <th scope='row'>{row.header}</th>
      <td>{row.description}</td>
    </tr>)
}

const MovieTable = ({ caption, tableRows }) => (
  <table className='movie-details-table'>
    <caption hidden>{caption}</caption>

    <tbody>
      {createTableRows(tableRows)}
    </tbody>
  </table>
)

export default MovieTable
