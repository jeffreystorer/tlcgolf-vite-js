import apiConfig from '@/ghin/config/api-config';
import { get } from '@/utils';
import { GolferApi } from '@/services';

export default function buildGHINRequests() {
  const token = get('token');
  const allPlayersInTable = get('allPlayersInTable');
  let requests = [];
  allPlayersInTable.forEach(buildRequests);

  function buildRequests(item, index) {
    const ghinNumber = item[0];
    requests = [...requests, GolferApi.findGolfer(ghinNumber, token)];
  }
  return requests;
}
