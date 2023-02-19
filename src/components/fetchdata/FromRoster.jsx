import React from 'react';
import Loading from '@/components/fetchdata/Loading';
import useFromRoster from '@/components/fetchdata/hooks/useFromRoster';

export default function FromRoster() {
  const [loading] = useFromRoster();

  if (loading) return <Loading />;

  document.location = '/';
  return null;
}
