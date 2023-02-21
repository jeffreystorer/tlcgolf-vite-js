import React from 'react';
import { Loading } from '@/components/common';
import { ChooseSource } from '@/components/fetchdata';
import { useFetchData } from '@/components/fetchdata/hooks';

export default function FetchData() {
  const [loading] = useFetchData();

  if (loading) return <Loading />;

  return <ChooseSource />;
}
