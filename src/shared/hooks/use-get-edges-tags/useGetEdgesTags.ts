import { useQuery } from '@tanstack/react-query';
import { api } from '../../api/api.ts';
import type { TagList } from '../../types';

export const useGetEdgesTags = () => {
  return useQuery<TagList>({
    queryKey: ['edges'],
    queryFn: () => api.get('/api/edges').then((res) => res.data),
  });
};
