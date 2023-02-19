import React from 'react';
import { useRecoilValue } from 'recoil';
import { get, createGroupsTableBodyRows } from '@/utils';
import * as state from '@/store';

const TableBody = () => {
  const course = useRecoilValue(state.course);
  const group = useRecoilValue(state.group);
  const groups = get('groups');

  let rows = createGroupsTableBodyRows(course, group, groups);
  let rowsTD = [];
  let colCount = rows[0].length;

  function generateRows() {
    for (var i = 0; i < rows.length; i++) {
      rowsTD[i] = (
        <tr key={i}>
          <td>{rows[i][0]}</td>
          {generateCols(i)}
        </tr>
      );
    }
    return rowsTD;
  }

  function generateCols(i) {
    let tds = [];
    for (var j = 1; j < colCount; j++) {
      tds[j] = (
        <td className='td_ch' key={j}>
          {rows[i][j]}
        </td>
      );
    }
    return tds;
  }

  return <>{generateRows()}</>;
};

export default TableBody;
