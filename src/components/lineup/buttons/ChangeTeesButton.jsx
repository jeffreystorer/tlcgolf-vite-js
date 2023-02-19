import React from 'react';
import { useSetRecoilState } from 'recoil';
import * as state from '@/store';
import '@/styles/App.css';

export default function ChangeTeesButton() {
  const setShowSelectTees = useSetRecoilState(state.showSelectTees);

  function handleClick(event) {
    event.preventDefault();
    setShowSelectTees(true);
  }

  return (
    <>
      <button
        id='handleChangeTeesSelected'
        className='button stacked'
        onClick={handleClick}>
        Change Tees
      </button>
      <br />
    </>
  );
}
