import React, { useEffect, useState } from 'react';
import { addRosterDataToPlayers, setCanadianData } from '@/services/utils';
import { useFetchRequests } from '@/services/hooks';

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
