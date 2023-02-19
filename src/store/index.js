import { atom, selector } from 'recoil';
import { createPlayersArray, getPlayersNotInTeeTime } from '@/utils';

const localStorageEffect =
  (key) =>
  ({ setSelf, onSet }) => {
    const savedValue = localStorage.getItem(key);
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }

    onSet((newValue, _, isReset) => {
      isReset
        ? localStorage.removeItem(key)
        : localStorage.setItem(key, JSON.stringify(newValue));
    });
  };

export const course = atom({
  key: 'course',
  default: '',
  effects_UNSTABLE: [localStorageEffect('course')],
});

export const group = atom({
  key: 'group',
  default: '',
  effects_UNSTABLE: [localStorageEffect('group')],
});

export const teesSelected = atom({
  key: 'teesSelected',
  default: {},
  effects_UNSTABLE: [localStorageEffect('teesSelected')],
});

export const idsInLineup = selector({
  key: 'idsInLineup',
  get: ({ get }) => {
    return get(playersInLineup).map((player) => player.id.toString());
  },
});

export const playersInLineup = atom({
  key: 'playersInLineup',
  default: [],
  //effects_UNSTABLE: [localStorageEffect("playersInLineup")],
});

export const playerCount = selector({
  key: 'playerCount',
  get: ({ get }) => {
    let theTeamTables = get(teamTables);
    let teamCount = Object.keys(theTeamTables).length - 1;
    let playerCount = 0;
    for (let i = 0; i < teamCount; i++) {
      let teamName = 'team' + i;
      playerCount = playerCount + theTeamTables[teamName].length;
    }
    return playerCount;
  },
});

export const playersInGroup = selector({
  key: 'playersInGroup',
  get: ({ get }) => {
    const theCourse = get(course);
    const theGroup = get(group);
    const theTeesSelected = get(teesSelected);
    const notUsed = '';
    return createPlayersArray(
      'createLineupTable',
      notUsed,
      notUsed,
      theCourse,
      theGroup,
      theTeesSelected[theCourse],
      notUsed,
      notUsed,
      'alphabetical'
    );
  },
});

export const sortOrder = atom({
  key: 'sortOrder',
  default: 'alphabetical',
});

export const lineupTitle = atom({
  key: 'lineupTitle',
  default: 'New Lineup',
});

export const showLocalNumbers = atom({
  key: 'showLocalNumbers',
  default: false,
  effects_UNSTABLE: [localStorageEffect('showLocalNumbers')],
});

export const showTeamHcp = atom({
  key: 'showTeamHcp',
  default: false,
  effects_UNSTABLE: [localStorageEffect('showTeamHcp')],
});

export const showAddTeamMember = atom({
  key: 'showAddTeamMember',
  default: {
    team0: false,
    team1: false,
    team2: false,
    team3: false,
    team4: false,
    team5: false,
    team6: false,
    team7: false,
    team8: false,
    team9: false,
  },
  effects_UNSTABLE: [localStorageEffect('showAddTeamMember')],
});

export const showFirstName = atom({
  key: 'showFirstName',
  default: false,
  effects_UNSTABLE: [localStorageEffect('showFirstName')],
});

export const showIndividualHandicaps = atom({
  key: 'showIndividualHandicaps',
  default: true,
  effects_UNSTABLE: [localStorageEffect('showIndividualHandicaps')],
});

export const showAddDeletePlayers = atom({
  key: 'showAddDeletePlayers',
  default: false,
});

export const showAddDeletePlayersButton = atom({
  key: 'showAddDeletePlayersButton',
  default: true,
});

export const showAddPlayers = atom({
  key: 'showAddPlayers',
  default: false,
});

export const showDeletePlayers = atom({
  key: 'showDeletePlayers',
  default: false,
});

export const showSelectTees = atom({
  key: 'showSelectTees',
  default: false,
});

export const teeAssignments = atom({
  key: 'teeAssignments',
  default: [1],
});

export const linkTime = atom({
  key: 'linkTime',
  default: 'Set Link Time Above',
});

export const teeTimeCount = atom({
  key: 'teeTimeCount',
  default: '',
});

export const teamTables = atom({
  key: 'teamTables',
  default: {
    teeAssignments: [1],
    team0: [],
    team1: [],
    team2: [],
    team3: [],
    team4: [],
    team5: [],
    team6: [],
    team7: [],
    team8: [],
    team9: [],
  },
});

export const playingDate = atom({
  key: 'playingDate',
  default: 'Date',
});

export const textareaValue = atom({
  key: 'textareaValue',
  default: '',
});

export const progs069 = atom({
  key: 'progs069',
  default: '0',
});

export const progAdj = atom({
  key: 'progAdj',
  default: '0',
});

export const teeChoiceChangedId = atom({
  key: 'teeChoiceChangedId',
  default: 0,
});

export const overrideCHChoiceChangedId = atom({
  key: 'overrideCHChoiceChangedId',
  default: 0,
});

export const playersNotInTeeTime = selector({
  key: 'playersNotInTeeTime',
  get: ({ get }) => {
    return getPlayersNotInTeeTime(get(playersInLineup), get(teamTables));
  },
});

export const currentLineupIndex = atom({
  key: 'currentLineupIndex',
  default: -1,
  //effects_UNSTABLE: [localStorageEffect("currentLineupIndex")],
});

export const currentLineup = atom({
  key: 'currentLineup',
  default: null,
  //effects_UNSTABLE: [localStorageEffect("currentLineup")],
});

export const currentLineupKey = atom({
  key: 'currentLineupKey',
  default: '',
  //effects_UNSTABLE: [localStorageEffect("currentLineupKey")],
});

export const screenshotUrl = atom({
  key: 'screenshotUrl',
  default: '',
});

export const showMissingPlayerModal = atom({
  key: 'showMissingPlayerModal',
  default: false,
});

export const missingPlayerMessage = atom({
  key: 'missingPlayerMessage',
  default: '',
});

export const jpgImage = atom({
  key: 'jpgImage',
  default: null,
});

export const dimensionIndex = atom({
  key: 'dimensions',
  default: 0,
});

export const hasSchedule = atom({
  key: 'hasSchedule',
  default: null,
  effects_UNSTABLE: [localStorageEffect('hasSchedule')],
});

export const schedules = atom({
  key: 'schedules',
  default: [],
  effects_UNSTABLE: [localStorageEffect('schedules')],
});

export const betsArray = atom({
  key: 'betsArray',
  default: [],
  effects_UNSTABLE: [localStorageEffect('bets')],
});

export const showGameOptionsModal = atom({
  key: 'showGameOptionsModal',
  default: false,
});

export const okToSave = selector({
  key: 'okToSave',
  get: ({ get }) => {
    let ok = false;
    if (
      get(playingDate) !== 'Date' &&
      get(teeTimeCount) > 0 &&
      get(linkTime) !== 'Set Link Time Above' &&
      get(playersInLineup).length > 0 &&
      get(teamTables).team0.length > 0
    ) {
      ok = true;
    }
    return ok;
  },
});

export const okToAddPlayers = selector({
  key: 'okToAddPlayers',
  get: ({ get }) => {
    let ok = false;
    if (
      get(playingDate) !== 'Date' &&
      get(teeTimeCount) > 0 &&
      get(linkTime) !== 'Set Link Time Above'
    ) {
      ok = true;
    }
    return ok;
  },
});

export const realGhinNumber = selector({
  key: 'realGhinNumber',
  get: ({ get }) => {
    let ghinNumber = JSON.parse(localStorage.getItem('ghinNumber'));
    return ghinNumber;
  },
});

export const captainGhinNumber = atom({
  key: 'captainGhinNumber',
  default: realGhinNumber,
});
