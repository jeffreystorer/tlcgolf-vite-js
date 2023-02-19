//SATURDAY FETCH

import { useEffect, useState } from 'react';
import { SHEET_URL, BASE_URL, SHEET_ID, BATCH_KEY } from '@/services/constants';
import setSheetUrl from '@/services/utils/setSheetUrl';
import useFetchSheetsData from '@/services/hooks/useFetchSheetsData';
import useFetchToken from '@/services/hooks/useFetchToken';
import { get, set } from '@/utils/localStorage';
import setPlayersAndGroups from '@/services/utils/setPlayersAndGroups';

export default function useFetchDataSaturday() {
  const [loading, setLoading] = useState(true);
  const ghinNumber = get('ghinNumber');
  const BATCH_URL =
    BASE_URL +
    SHEET_ID +
    '/values:batchGet?ranges=GHIN_Numbers&ranges=' +
    ghinNumber +
    BATCH_KEY;
  const [batchData, batchLoading] = useFetchSheetsData(BATCH_URL, 'many');
  const [sheetsData, sheetsLoading] = useFetchSheetsData(SHEET_URL, 'many');
  const [token, tokenLoading] = useFetchToken();

  useEffect(() => {
    if (!batchLoading && !sheetsLoading && !tokenLoading) {
      set('roster', batchData.valueRanges[0].values);
      setSheetUrl(sheetsData);
      setPlayersAndGroups(batchData.valueRanges[1].values);
      set('token', token.golfer_user.golfer_user_token);
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [batchLoading, sheetsLoading, tokenLoading]);

  return [loading];
}
