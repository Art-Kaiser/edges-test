import { useGetEdgesTags } from '../../../shared/hooks/use-get-edges-tags/useGetEdgesTags.ts';
import { Link, Outlet } from 'react-router-dom';
import { useQueryTagParams } from '../../../shared/hooks/use-query-tag-params/useQueryTagParams.ts';

export const EdgesPage = () => {
  const { data: tags, isError, isLoading } = useGetEdgesTags();
  const { tag: queryTag, handleTagChange } = useQueryTagParams();

  return (
    <div>
      <aside style={{ width: 350 }}>
        <h1>Список космических объектов</h1>
        {isLoading && <div>Загрузка...</div>}

        <div style={{ display: 'flex', gap: 12 }}>
          <Link to={`currents`}>/currents</Link>
          <Link to={`histories`}>/histories</Link>
        </div>

        {!isError ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {tags?.map((tag) => (
              <button
                key={tag}
                onClick={() => handleTagChange(tag)}
                style={{
                  background: tag === queryTag ? 'red' : 'green',
                  color: 'white',
                  padding: 2,
                  cursor: 'pointer',
                }}
              >
                {' '}
                #{tag}
              </button>
            ))}
          </div>
        ) : (
          <div>Ошибка получения тегов</div>
        )}
      </aside>

      <Outlet />
    </div>
  );
};
