import { useSearchParams } from 'react-router-dom';
import { useCallback, useEffect } from 'react';
import { DEFAULT_TAG_NAME_PARAM } from '../../constants/query-tag-params.ts';
import { type TagsTypes } from '../../types';

export const useQueryTagParams = (initialTag?: TagsTypes) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const tag = (searchParams.get(DEFAULT_TAG_NAME_PARAM) as TagsTypes) ?? initialTag;

  const handleTagChange = useCallback(
    (newLimit: TagsTypes) => {
      const newSearchParams = new URLSearchParams(searchParams);

      newSearchParams.set(DEFAULT_TAG_NAME_PARAM, newLimit.toString());

      setSearchParams(newSearchParams);
    },
    [searchParams, setSearchParams],
  );

  useEffect(() => {
    const pageParam = searchParams.get(DEFAULT_TAG_NAME_PARAM);

    if (!pageParam) {
      const newSearchParams = new URLSearchParams(searchParams);

      if (!pageParam) {
        newSearchParams.set(DEFAULT_TAG_NAME_PARAM, tag ?? '');
      }

      setSearchParams(newSearchParams, { replace: true });
    }
  }, [tag, searchParams, setSearchParams]);

  return {
    tag,
    handleTagChange,
  };
};
