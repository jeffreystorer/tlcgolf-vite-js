import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
//import useVisibilityChange from 'use-visibility-change';
import { TableAll } from '@/components/groups';
import FetchData from '@/components/fetchdata/FetchData';
import { GroupAndCourseDropdowns } from '@/components/common';
import {
  getGroupsTableDisplayNumber,
  get,
  loginStale,
  returnHasMultipleGroups,
} from '@/utils';
import * as state from '@/store';
import '@/styles/App.css';

export default function GroupsPage() {
  const hasMultipleGroups = returnHasMultipleGroups();
  const groups = get('groups');
  const [course, setCourse] = useRecoilState(state.course);
  const [group, setGame] = useRecoilState(state.group);
  let savedCourse = get('course');
  let savedGame = get('group');
  const onShow = () => {
    window.location.reload();
  };
  //useVisibilityChange({ onShow });

  useEffect(() => {
    setCourse(savedCourse);
    setGame(savedGame);
    //eslint-disable-next-line
  }, []);

  let displayNumber = getGroupsTableDisplayNumber(course, group, groups);

  if (loginStale()) return <FetchData />;

  switch (displayNumber) {
    case 1:
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
    case 2:
      return (
        <>
          <br />
          <TableAll />
        </>
      );
    default:
      return undefined;
  }
}
