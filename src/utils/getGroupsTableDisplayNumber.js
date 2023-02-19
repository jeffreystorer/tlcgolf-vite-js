import * as courseData from "@/data"

export default function getGameAndPlayersTableDisplayNumber(
  course,
  group,
  groups
) {
  let displayNumber = 1
  if (groups.includes(group) && courseData.courses.includes(course)) {
    //we can display everything
    displayNumber = 2
  }

  return displayNumber
}
