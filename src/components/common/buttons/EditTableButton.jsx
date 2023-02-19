import React from 'react';
import { useResetRecoilState } from 'recoil';
import * as state from '@/store';
import '@/styles/App.css';
import { get, set } from '@/utils';

const EditTableButton = ({ text = 'Edit Table' }) => {
  const resetPlayersInLineup = useResetRecoilState(state.playersInLineup);
  const resetCurrentLineupIndex = useResetRecoilState(state.currentLineupIndex);
  const resetCurrentLineup = useResetRecoilState(state.currentLineup);
  const resetLineupTitle = useResetRecoilState(state.lineupTitle);
  const sheetURL = get('sheetURL');

  function handleClick() {
    set('timeStamp', 1);
    resetPlayersInLineup();
    resetCurrentLineupIndex();
    resetCurrentLineup();
    resetLineupTitle();
    document.location = sheetURL;
  }

  return (
    <>
      <div className='div--center'>
        <button className='button stacked' onClick={handleClick}>
          {text}
        </button>
      </div>
    </>
  );
};

export default EditTableButton;
