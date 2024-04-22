// import { useData } from './useData';
// import { Platform } from './useGames';
import platforms from '../data/platforms';

// Store platforms as static data
export const usePlatforms = () => ({
  data: platforms,
  error: null,
  loading: false,
});

// This will fetch the data from server
// export const usePlatforms = () => {
//   return useData<Platform>('/platforms/lists/parents');
// };
