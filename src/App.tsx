import { RouterProvider } from './app/providers/router-provider/RouterProvider.tsx';
import { QueryClient } from './app/providers/query-client-provider/QueryClientProvider.tsx';

function App() {
  return (
    <QueryClient>
      <RouterProvider />
    </QueryClient>
  );
}

export default App;
