import { courses } from '@/data';
import { createTeeArrays } from '@/utils';

export default function getTeeValueFromTeeLabel(defaultTeeLabel, course) {
  const courseIndex = courses.indexOf(course);
  const teeArrays = createTeeArrays();
  const courseTeeArray = teeArrays[courseIndex];
  let stepOne = defaultTeeLabel.replace(' (Men only)', '');
  let stepTwo = stepOne.replace(' (Women only)', '');
  let teeObj = courseTeeArray.find((obj) => obj.label === stepTwo);
  let teeValue = teeObj.value;
  return teeValue;
}
