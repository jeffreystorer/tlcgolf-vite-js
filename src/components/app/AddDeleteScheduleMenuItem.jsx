import React from 'react';
import '@/styles/App.css';
import { set } from '@/components/common/utils';

export default function EditTableMenuItem() {
  const url =
    'https://docs.google.com/spreadsheets/d/1GEP9S0xt1JBPLs3m0DoEOaQdwxwD8CEPFOXyxlxIKkg/edit#gid=1579243035';

  function handleClick() {
    set('timeStamp', 1);
    document.location = url;
  }

  return (
    <>
      <div onClick={handleClick}>Add or Delete a Schedule</div>
    </>
  );
}
