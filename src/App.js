import { ThemeProvider } from './context/theme.context';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ToastContainer } from 'react-toastify';
import AppLayout from './layouts';
import AppRoutes from './routes/AppRoutes';
import AuthProvider from './context/auth.context';
import 'react-toastify/dist/ReactToastify.css';

const client = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 300000,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={client}>
      <ReactQueryDevtools initialIsOpen={true} />
      <AuthProvider>
        <ThemeProvider>
          <AppLayout>
            <ToastContainer theme='colored' />
            <AppRoutes />
          </AppLayout>
        </ThemeProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;
