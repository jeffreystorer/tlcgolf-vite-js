import React from 'react';
import Loading from '@/components/fetchdata/Loading';
import SaturdayTable from '@/components/saturday/SaturdayTable';
import useFromGHIN from '@/components/fetchdata/hooks/useFromGHIN';

export default function FromGHINSaturday() {
  const [loading] = useFromGHIN();

  if (loading) return <Loading />;
  return <SaturdayTable isLoggedIn={false} />;
}
