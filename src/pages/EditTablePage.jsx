import React, { useEffect } from 'react';
import { useResetRecoilState } from 'recoil';
import { Navigate } from 'react-router-dom';
import * as state from '@/store';
import '@/styles/App.css';
import { get, set } from '@/utils';

export default function EditTablePage() {
  const resetPlayersInLineup = useResetRecoilState(state.playersInLineup);
  const resetCurrentLineupIndex = useResetRecoilState(state.currentLineupIndex);
  const resetCurrentLineup = useResetRecoilState(state.currentLineup);
  const resetLineupTitle = useResetRecoilState(state.lineupTitle);
  const sheetURL = get('sheetURL');

  useEffect(() => {
    set('timeStamp', 1);
    resetPlayersInLineup();
    resetCurrentLineupIndex();
    resetCurrentLineup();
    resetLineupTitle();
    document.location = sheetURL;
  }, [
    resetCurrentLineup,
    resetCurrentLineupIndex,
    resetLineupTitle,
    resetPlayersInLineup,
    sheetURL,
  ]);

  return <Navigate to='/' />;
}
