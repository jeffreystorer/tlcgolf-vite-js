import React from 'react';
import FromGHIN from '@/components/fetchdata/FromGHIN';
import FromRoster from '@/components/fetchdata/FromRoster';
import { get } from '@/utils/localStorage';
import setFoundGolferAndIsLoggedIn from '@/services/utils/setFoundGolferAndIsLoggedIn';

export default function ChooseSource() {
  const dataMode = get('dataMode');
  if (dataMode === 'roster') setFoundGolferAndIsLoggedIn(null);

  return <>{dataMode === 'ghin' ? <FromGHIN /> : <FromRoster />}</>;
}
