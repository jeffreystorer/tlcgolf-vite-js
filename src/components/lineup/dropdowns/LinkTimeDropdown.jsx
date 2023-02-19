import React from 'react';
import { useRecoilState } from 'recoil';
import { linkTimeOptionItems } from '@/optionitems';
import * as state from '@/store';
import '@/styles/App.css';

export default function LinkTimeDropdown() {
  const [linkTime, setLinkTime] = useRecoilState(state.linkTime);
  const handleChange = (event) => {
    setLinkTime(event.target.value);
  };

  return (
    <>
      <label className='label_link-time'>Link Time:&nbsp;</label>
      <label className='selector_lone'>
        <select value={linkTime} onChange={handleChange}>
          <option value=''>Link Time</option>
          {linkTimeOptionItems}
        </select>
      </label>
    </>
  );
}
