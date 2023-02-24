import React from 'react';
import { get } from '@/components/common/utils';
import '@/components/lookup/styles/lookup.css';

export default function DataPresentation() {
  let searchedName = get('last_name');
  if (get('first_name')) searchedName = searchedName + ', ' + get('first_name');
  const golfers = get('golfers').golfers;
  function generateRows() {
    let oddRow = false;
    for (var i = 0; i < golfers.length; i++) {
      oddRow = !oddRow;
      rowsTD[i] = (
        <tr key={i} className={`${oddRow ? '' : 'tr--shaded'}`}>
          <td className='saturday-left-row-cell'>{rows[i][0]}</td>
          {generateCols(i, oddRow)}
        </tr>
      );
    }
    return rowsTD;
  }

  return (
    <>
      <br />
      <h3 className='center'>GHIN Information for {searchedName}</h3>
      <br />
      <table id='lookup-table'>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Index</th>
            <th>GHIN Number</th>
            <th>Club</th>
            <th>Primary Club State</th>
          </tr>
        </thead>
        <tbody>
          {golfers
            .sort((a, b) => {
              return a.first_name.toUpperCase() > b.first_name.toUpperCase()
                ? 1
                : -1;
            })
            .map((golfer, index) => {
              const evenRow = Math.abs(index % 2) == 0;
              return (
                <tr key={index} className={`${evenRow ? '' : 'tr--shaded'}`}>
                  <td>{golfer.first_name}</td>
                  <td>{golfer.handicap_index}</td>
                  <td>{golfer.ghin}</td>
                  <td>{golfer.club_name}</td>
                  <td>{golfer.primary_club_state}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
}
