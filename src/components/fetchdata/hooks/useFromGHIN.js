import React, { useEffect, useState } from 'react';
import addGHINDataToPlayers from '@/services/utils/addGHINDataToPlayers';
import processCourseDataFromGHIN from '@/services/utils/processCourseDataFromGHIN';
import setCanadianData from '@/services/utils/setCanadianData';
import useFetchRequests from '@/services/hooks/useFetchRequests';
import useFindGolfer from '@/services/hooks/useFindGolfer';
import setFoundGolferAndIsLoggedIn from '@/services/utils/setFoundGolferAndIsLoggedIn';

export default function useFromGHIN() {
  const [loading, setLoading] = useState(true);
  const [canadianData, canadianDataLoading] = useFetchRequests('canadian');
  const [courseData, courseDataLoading] = useFetchRequests('course');
  const [ghinData, ghinDataLoading] = useFetchRequests('ghin');
  const [golfer, golferLoading] = useFindGolfer();

  useEffect(() => {
    if (
      !canadianDataLoading &&
      !courseDataLoading &&
      !ghinDataLoading &&
      !golferLoading
    ) {
      processCourseDataFromGHIN(courseData);
      setCanadianData(canadianData);
      addGHINDataToPlayers(ghinData);
      setFoundGolferAndIsLoggedIn(golfer.golfers[0]);
      setLoading(false);
    }
  }, [canadianDataLoading, courseDataLoading, ghinDataLoading, golferLoading]);

  return [loading];
}
