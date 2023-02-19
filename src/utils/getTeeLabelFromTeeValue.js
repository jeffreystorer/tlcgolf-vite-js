import { courses } from '@/data';
import { createTeeArrays } from '@/utils';

export default function getTeeLabelFromTeeValue(teeValue, course) {
  const courseIndex = courses.indexOf(course);
  const teeArrays = createTeeArrays();
  const courseTeeArray = teeArrays[courseIndex];
  let teeObj = courseTeeArray.find((obj) => obj.value === teeValue);
  let teeLabel = teeObj.label;
  return teeLabel;
}
