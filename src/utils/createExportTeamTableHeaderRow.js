import { getExportTeesSelectedArray } from "@/utils"

export default function createTeamTableHeaderRow(teesSelected) {
  let teesSelectedArray = getExportTeesSelectedArray(teesSelected)
  teesSelectedArray.unshift("")
  return teesSelectedArray
}
