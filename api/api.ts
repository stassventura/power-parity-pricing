import { PARITIES } from '../helpers/constants';
import { TCountry } from '../types/Tcountry';

export default {
  parity: {
    list: async (): Promise<TCountry[]> => Object.keys(PARITIES) as TCountry[],
    fetch: async (country: TCountry): Promise<number> => {
      return PARITIES[country] || 10;
    },
  },
};
