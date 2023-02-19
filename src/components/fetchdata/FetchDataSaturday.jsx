import React from 'react';
import Loading from '@/components/fetchdata/Loading';
import FromGHINSaturday from '@/components/fetchdata/FromGHINSaturday';
import useFetchDataSaturday from '@/components/fetchdata/hooks/useFetchDataSaturday';

export default function FetchDataSaturday() {
  const [loading] = useFetchDataSaturday();

  if (loading) return <Loading />;

  return <FromGHINSaturday />;
}
