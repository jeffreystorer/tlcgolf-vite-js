import React from 'react';
import { useVisibilityChange } from 'use-visibility-change';
import FetchData from '@/components/fetchdata/FetchData';
import { Table } from '@/components/lineup';
import { loginStale } from '@/utils';
import '@/styles/App.css';

export default function LineupPage() {
  const onShow = () => {
    window.location.reload();
  };
  useVisibilityChange({ onShow });

  if (loginStale()) return <FetchData />;

  return (
    <>
      <Table />
    </>
  );
}
