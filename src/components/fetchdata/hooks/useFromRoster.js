import React, { useEffect, useState } from 'react';
import addRosterDataToPlayers from '@/services/utils/addRosterDataToPlayers';
import setCanadianData from '@/services/utils/setCanadianData';
import useFetchRequests from '@/services/hooks/useFetchRequests';

export default function useFromRoster() {
  const [loading, setLoading] = useState(true);
  const [canadianData, canadianDataLoading] = useFetchRequests('canadian');

  useEffect(() => {
    if (!canadianDataLoading) {
      setCanadianData(canadianData);
      addRosterDataToPlayers();
      setLoading(false);
    }
  }, [canadianDataLoading]);

  return [loading];
}
