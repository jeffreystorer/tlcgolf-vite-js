import { returnCourseHandicapArray, get } from '@/utils';

export default function createGroupsTableBodyRows(course, group, groups) {
  const allPlayersInTable = get('allPlayersInTable');
  const showLocalNumbers = get('showLocalNumbers');
  const teesSelected = get('teesSelected');

  //declare some variables
  var rows = [];
  let strHcpIndex;
  let gender;

  //filter players, then add them
  function addRow(item, index) {
    let groupNumber = groups.indexOf(group);
    switch (groupNumber) {
      case 0:
        doAdd(item, index);
        break;
      default:
        let groupIndex = groupNumber + 6;
        if (item[groupIndex].toUpperCase() === 'YES') doAdd(item, index);
    }
  }

  //construct the row
  function compute(aPlayer, index) {
    strHcpIndex = aPlayer[4];
    let firstName = aPlayer[3];
    let lastName = aPlayer[1];
    gender = aPlayer[5];
    let local = aPlayer[6];
    let prefix = '';
    if ((showLocalNumbers === true) | (showLocalNumbers === 'true'))
      prefix = local + ' ';
    let player = prefix + firstName + ' ' + lastName + ' (' + strHcpIndex + ')';
    let rowReturn = returnCourseHandicapArray(
      gender,
      strHcpIndex,
      course,
      teesSelected[course]
    );
    rowReturn.unshift(player);
    return rowReturn;
  }

  //add a row for each player
  function doAdd(item, index) {
    const aPlayer = item;
    const newRow = compute(aPlayer, index);
    rows.push(newRow);
  }

  allPlayersInTable.forEach(addRow);
  return rows;
}
