import React from 'react';
import { get, createGroupsTableHeaderRow } from '@/utils';

export default function TableHeader() {
  const course = get('course');
  const teesSelected = get('teesSelected');
  let cols = createGroupsTableHeaderRow(teesSelected[course]);
  const getHeader = () => {
    var keys = cols;
    return keys.map((key, index) => {
      return (
        <th className='td_ch' key={index} scope='col'>
          {key}
        </th>
      );
    });
  };

  return (
    <>
      <tr>{getHeader()}</tr>
    </>
  );
}
