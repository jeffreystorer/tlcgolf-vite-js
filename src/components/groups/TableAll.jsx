import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import { useRecoilValue } from 'recoil';
import { TableHeader, TableBody } from '@/components/groups';
import { GroupAndCourseDropdowns } from '@/components/common';
import { get, set } from '@/utils';
import * as state from '@/store';

export default function TableAll() {
  const group = useRecoilValue(state.group);
  const course = useRecoilValue(state.course);
  const teesSelected = useRecoilValue(state.teesSelected);
  const [showLocalNumbers, setShowLocalNumbers] = useState(
    get('showLocalNumbers')
  );

  function handleShowLocalNumbersChange() {
    set('showLocalNumbers', !showLocalNumbers);
    setShowLocalNumbers((prevState) => !prevState);
  }

  return (
    <>
      <Container>
        <Row
          xs='auto'
          sm='auto'
          md='auto'
          lg='auto'
          xl='auto'
          xxl='auto'
          className='justify-content-center'>
          <Col xs='auto' sm='auto' md='auto' lg='auto' xl='auto' xxl='auto'>
            <GroupAndCourseDropdowns />
            <br />
            <br />
            <Table id='groups-table-div' striped size='sm' className='w-100'>
              <thead>
                <tr>
                  <th
                    colSpan={teesSelected[course].length + 1}
                    className='tr--center-background-white'>
                    {group} at {course.toUpperCase()}
                  </th>
                </tr>
                <TableHeader />
              </thead>
              <tbody>
                <TableBody />
              </tbody>
            </Table>
            <div className='div--center'>
              <input
                className='checkbox'
                type='checkbox'
                id='showLocalNumbers'
                onChange={handleShowLocalNumbersChange}
                defaultChecked={showLocalNumbers}></input>
              <label htmlFor='showLocalNumbers'>&nbsp;Show Local Numbers</label>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
