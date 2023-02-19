import { set } from '@/utils/localStorage';

export default function setBets(values) {
  set('bets', values);
}
