import { useQuery } from '@tanstack/react-query';
import { api } from '../../api/api.ts';
import type { TagsTypes } from '../../types';

export const useGetEdgesCurrents = (tag: TagsTypes) => {
  return useQuery<Record<string, number>>({
    queryKey: ['current', tag, { type: 'done' }],
    queryFn: () => api.get(`/api/current?edge=${tag}`).then((res) => res.data),
  });
};
