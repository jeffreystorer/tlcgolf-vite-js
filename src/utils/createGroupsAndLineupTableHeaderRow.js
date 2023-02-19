export default function createGroupsAndLineupTableHeaderRow(teesSelected) {
  let teesSelectedArray = teesSelected.map((a) => a.value)
  //add a blank column over the player
  teesSelectedArray.unshift("")
  return teesSelectedArray
}
