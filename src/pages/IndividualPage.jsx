import React from 'react';
import Table from 'react-bootstrap/Table';
import { useVisibilityChange } from 'use-visibility-change';
import {
  IndividualTableHeader,
  CHTableBody,
  TSTableBody,
} from '@/components/individual';
import FetchData from '@/components/fetchdata/FetchData';
import {
  get,
  getIndividualGHIN,
  loginStale,
  returnAllTeesSelected,
} from '@/utils';
import '@/styles/App.css';

export default function IndividualPage() {
  const dataMode = get('dataMode');
  const [index, gender, golfer] = getIndividualGHIN(dataMode);
  // eslint-disable-next-line
  const [teeLabels, teeValues, ratings, slopes, pars] = get('courseData');
  const teesSelected = get('teesSelected');

  const onShow = () => {
    window.location.reload();
  };
  useVisibilityChange({ onShow });

  let allTeesSelected = returnAllTeesSelected(teesSelected);

  if (loginStale()) return <FetchData />;

  return (
    <>
      <br />
      <div className='golfer--center'>{golfer}</div>
      <br />
      <div>
        <Table striped size='lg' className='w-25'>
          <thead>
            <IndividualTableHeader tableName='CrsHcp' />
          </thead>
          <tbody>
            <CHTableBody
              index={index}
              gender={gender}
              teesSelected={allTeesSelected}
              teeValues={teeValues}
              ratings={ratings}
              slopes={slopes}
              pars={pars}
            />
          </tbody>
        </Table>
        <br />
        <Table striped size='lg' className='w-25'>
          <thead>
            <IndividualTableHeader tableName='Score*' />
          </thead>
          <tbody>
            <TSTableBody
              index={index}
              gender={gender}
              teesSelected={allTeesSelected}
              teeValues={teeValues}
              ratings={ratings}
              slopes={slopes}
              pars={pars}
            />
          </tbody>
        </Table>
        <br></br>
        <p className='paragraph--center'>
          *Score you must average eight out of your<br></br>last twenty rounds
          to maintain your index.
        </p>
      </div>
    </>
  );
}
