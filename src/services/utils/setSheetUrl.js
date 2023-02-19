import { get, set } from '@/utils/localStorage';
import { SHEET_ID } from '@/services/constants';

export default function setSheetUrl(data) {
  const ghinNumber = get('ghinNumber');
  let propertyArray;
  let propertyIndex;
  let sheetUrl;
  try {
    propertyArray = data.sheets;
    propertyIndex = propertyArray.findIndex(
      (x) => x.properties.title === ghinNumber
    );
  } catch (err) {
    console.log(err);
  }
  const bareUrl = 'https://docs.google.com/spreadsheets/d/' + SHEET_ID;
  if (propertyIndex > -1) {
    set('hasGoogleSheet', 'true');
    let sheetGid = propertyArray[propertyIndex].properties.sheetId;
    sheetUrl = bareUrl + '/edit#gid=' + sheetGid;
  } else {
    set('hasGoogleSheet', 'false');
    set('allPlayersInTable', '[]');
    set('groups', '[]');
    sheetUrl = bareUrl;
  }
  set('sheetURL', sheetUrl);
}
