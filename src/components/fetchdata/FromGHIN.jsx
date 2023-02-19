import React from 'react';
import Loading from '@/components/fetchdata/Loading';
import useFromGHIN from '@/components/fetchdata/hooks/useFromGHIN';

export default function FromGHIN() {
  const [loading] = useFromGHIN();

  if (loading) return <Loading />;

  document.location = '/';
  return null;
}
