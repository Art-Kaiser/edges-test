import { useQuery } from '@tanstack/react-query';
import { api } from '../../api/api.ts';
import type { IHistoryPoint, TagsTypes } from '../../types';

export const useGetEdgesHistories = (tag: TagsTypes) => {
  return useQuery<Record<string, IHistoryPoint[]>>({
    queryKey: ['history', tag],
    queryFn: () => api.get(`/api/history?edge=${tag}`).then((res) => res.data),
  });
};
