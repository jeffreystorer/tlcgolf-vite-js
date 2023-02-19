import { courses } from '@/data';
import { get } from '@/utils';

export default function createTeeLabels() {
  const courseData = get('courseData');
  let teeLabels = [];
  courses.forEach(createTeeLabelArray);
  function createTeeLabelArray(item) {
    const courseIndex = courses.indexOf(item);
    const mTeeLabels = courseData[0][0][courseIndex];
    const wTeeLabels = courseData[0][1][courseIndex];
    teeLabels[courseIndex] = [mTeeLabels, wTeeLabels];
  }
  return teeLabels;
}
