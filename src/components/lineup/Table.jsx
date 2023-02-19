import React from 'react';
import { useRecoilValue } from 'recoil';
import { TableAll } from '@/components/lineup';
import { GroupAndCourseDropdowns } from '@/components/common';
import { courses } from '@/data';
import { get, returnHasMultipleGroups } from '@/utils';
import * as state from '@/store';
import '@/styles/App.css';

export default function Table() {
  const groups = get('groups');
  const course = useRecoilValue(state.course);
  const group = useRecoilValue(state.group);
  const hasMultipleGroups = returnHasMultipleGroups();

  if (groups.includes(group) && courses.includes(course)) {
    return <TableAll />;
  } else {
    return (
      <>
        {hasMultipleGroups ? (
          <p className='div--center-bold'>
            Click on the dropdown boxes below
            <br />
            to select a group and a course.
          </p>
        ) : (
          <p className='div--center-bold'>
            Click on the dropdown box below
            <br />
            to select a course.
          </p>
        )}
        <GroupAndCourseDropdowns />
      </>
    );
  }
}
