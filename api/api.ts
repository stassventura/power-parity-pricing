import { PARITIES } from '../helpers/constants';
import { TCountry } from '../types/TCountry';

export default {
  parity: {
    list: async (): Promise<TCountry[]> => Object.keys(PARITIES) as TCountry[],
    fetch: async (country: TCountry): Promise<number> => {
      return PARITIES[country] || 10;
    },
  },
};
