import React from 'react';
import { CourseDropdown, GroupDropdown } from '@/components/common';
import { get, returnHasMultipleGroups } from '@/utils';

export default function GroupAndCourseDropdowns() {
  const hasMultipleGroups = returnHasMultipleGroups();
  const groups = get('groups');

  return (
    <div className='select-dropdown-container'>
      {hasMultipleGroups && <GroupDropdown />}
      <CourseDropdown groups={groups} hasMultipleGroups={hasMultipleGroups} />
    </div>
  );
}
