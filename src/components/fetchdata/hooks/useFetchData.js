import React, { useEffect, useState } from 'react';
import {
  WEDNESDAY_URL,
  SHEET_URL,
  BASE_URL,
  SHEET_ID,
  BATCH_KEY,
} from '@/services/constants';
import {
  setCaptains,
  setWednesdaySchedules,
  setTutorials,
  setBets,
  setSchedules,
  setSheetUrl,
  setCourseData,
  setFoundGolferAndIsLoggedIn,
  setPlayersAndGroups,
} from '@/services/utils';
import { useFetchSheetsData, useFetchToken } from '@/services/hooks';
import { get, set } from '@/utils';

export default function useFetchData() {
  const [loading, setLoading] = useState(true);
  const ghinNumber = get('ghinNumber');
  const dataMode = get('dataMode');
  const BATCH_URL =
    BASE_URL +
    SHEET_ID +
    '/values:batchGet?ranges=Schedules&ranges=Tutorials&ranges=Bets&ranges=Captains&ranges=GHIN_Numbers&ranges=Course_Data_From_GHIN&ranges=' +
    ghinNumber +
    BATCH_KEY;
  const [wednesdayValues, wednesdayLoading] = useFetchSheetsData(
    WEDNESDAY_URL,
    'one'
  );
  const [batchData, batchLoading] = useFetchSheetsData(BATCH_URL, 'many');
  const [sheetsData, sheetsLoading] = useFetchSheetsData(SHEET_URL, 'many');
  const [token, tokenLoading] = useFetchToken();

  useEffect(() => {
    if (!wednesdayLoading && !batchLoading && !sheetsLoading && !tokenLoading) {
      if (ghinNumber === '585871') setWednesdaySchedules(wednesdayValues);
      setSchedules(batchData.valueRanges[0].values);
      setTutorials(batchData.valueRanges[1].values);
      setBets(batchData.valueRanges[2].values);
      setCaptains(batchData.valueRanges[3].values);
      set('roster', batchData.valueRanges[4].values);
      if (dataMode === 'roster') {
        setFoundGolferAndIsLoggedIn(null);
        setCourseData(batchData.valueRanges[5].values);
      }
      setSheetUrl(sheetsData);
      const hasGoogleSheet = get('hasGoogleSheet');
      hasGoogleSheet && setPlayersAndGroups(batchData.valueRanges[6].values);
      set('token', token.golfer_user.golfer_user_token);
      setLoading(false);
    }
  }, [wednesdayLoading, batchLoading, sheetsLoading, tokenLoading]);

  return [loading];
}
