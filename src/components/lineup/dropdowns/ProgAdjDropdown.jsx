import React from 'react';
import { useRecoilState } from 'recoil';
import * as state from '@/store';
import '@/styles/App.css';

export default function ProgAdjDropdown() {
  const [progAdj, setProgAdj] = useRecoilState(state.progAdj);

  const handleChange = (event) => {
    setProgAdj(event.target.value);
  };

  return (
    <>
      <label className='selector_right'>
        <select value={progAdj} onChange={handleChange}>
          <option value=''>Prog Adj?</option>
          <option value='0'>No Adj</option>
          <option value='3'>3 plus 3</option>
          <option value='4'>4 minus 3</option>
        </select>
      </label>
    </>
  );
}
