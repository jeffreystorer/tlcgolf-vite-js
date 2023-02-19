import React from 'react';
import { v4 as uuidv4 } from 'uuid';

function IndividualTableHeader({ tableName }) {
  let courses = ['DC', 'MG', 'MW', 'OR', 'PA', 'TP'];
  return (
    <>
      <tr>
        <th scope='col'>
          <div className='center'>{tableName}</div>
        </th>
        {courses.map(function (courses) {
          return (
            <th key={uuidv4()} scope='col'>
              {courses}
            </th>
          );
        })}
      </tr>
    </>
  );
}
export default IndividualTableHeader;
