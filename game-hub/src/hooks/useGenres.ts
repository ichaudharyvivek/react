// import { useData } from './useData';
import genres from '../data/genres';

export interface Genre {
  id: number;
  name: string;
  image_background: string;
  slug: string;
}

// Store genres as static data
export const useGenres = () => ({ data: genres, loading: false, error: null });

// This will fetch the data from server
// export const useGenres = () => {
//   return useData<Genre>('/genres');
// };
