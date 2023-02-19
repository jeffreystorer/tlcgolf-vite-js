import React from 'react';
import '@/styles/App.css';
import { set } from '@/utils';

export default function EditBetsItem() {
  const url =
    'https://docs.google.com/spreadsheets/d/1GEP9S0xt1JBPLs3m0DoEOaQdwxwD8CEPFOXyxlxIKkg/edit#gid=270710306';

  function handleClick() {
    set('timeStamp', 1);
    document.location = url;
  }

  return (
    <>
      <div onClick={handleClick}>Edit Bets</div>
    </>
  );
}
