import React from 'react';
import Loading from '@/components/fetchdata/Loading';
import ChooseSource from '@/components/fetchdata/ChooseSource';
import useFetchData from '@/components/fetchdata/hooks/useFetchData';

export default function FetchData() {
  const [loading] = useFetchData();

  if (loading) return <Loading />;

  return <ChooseSource />;
}
