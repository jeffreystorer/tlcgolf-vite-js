import React from 'react';
//import { useVisibilityChange } from 'use-visibility-change';
import { Table } from '@/components/export';
import FetchData from '@/components/fetchdata/FetchData';
import { loginStale } from '@/utils';
import '@/styles/App.css';

export default function ExportPage() {
  const onShow = () => {
    window.location.reload();
  };
  //useVisibilityChange({ onShow });

  if (loginStale()) return <FetchData />;

  return (
    <>
      <Table />
    </>
  );
}
