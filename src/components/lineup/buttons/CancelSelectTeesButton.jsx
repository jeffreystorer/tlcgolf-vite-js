import React from 'react';
import { useSetRecoilState } from 'recoil';
import * as state from '@/store';
import '@/styles/App.css';

export default function CancelSelectTeesButton() {
  const setShowSelectTees = useSetRecoilState(state.showSelectTees);
  function handleClick() {
    setShowSelectTees(false);
  }

  return (
    <>
      <button className='button' onClick={handleClick}>
        Cancel
      </button>
      <br />
      <br />
    </>
  );
}
