import { lazy, Suspense } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import PrivateRoute from './PrivateRoute';
import PageTransition from './PageTransition';
import FullPageLoader from '../components/shared/loader/FullPageLoader.component';
import Home from '../pages/home/Home.page';
import ErrorBoundary from '../components/ErrorBoundary';

const Dashboard = lazy(() => import('../pages/dashboard/Dashboard.page'));
const Login = lazy(() => import('../pages/login/Login.page'));
const BooksPage = lazy(() => import('../pages/books/Books.page'));
const AuthorPage = lazy(() => import('../pages/author/Author.page'));
const ReturnBook = lazy(() =>
  import('../components/returned-book/ReturnedBook.component')
);
const IssueBook = lazy(() =>
  import('../components/issued-book/BookIssued.component')
);
const Materials = lazy(() => import('../pages/materials/Materials.page'));

const AppRoutes = () => {
  const location = useLocation();
  return (
    <ErrorBoundary>
      <Suspense fallback={<FullPageLoader />}>
        <AnimatePresence exitBeforeEnter initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route
              path='/'
              element={
                <PageTransition>
                  <Home />
                </PageTransition>
              }
            />
            <Route
              path='/login'
              element={
                <PageTransition>
                  <Login />
                </PageTransition>
              }
            />
            <Route
              path='/dashboard'
              element={
                // <PrivateRoute>
                <PageTransition>
                  <Dashboard />
                </PageTransition>
                // </PrivateRoute>
              }
            >
              <Route path='return-book' element={<ReturnBook />} />
              <Route path='issue-book' element={<IssueBook />} />
            </Route>
            <Route
              path='/books'
              element={
                // <PrivateRoute>
                <PageTransition>
                  <BooksPage />
                </PageTransition>
                // </PrivateRoute>
              }
            />
            <Route
              path='/author'
              element={
                // <PrivateRoute>
                <PageTransition>
                  <AuthorPage />
                </PageTransition>
                // </PrivateRoute>
              }
            />
            <Route
              path='/author/:authorId'
              element={
                <PageTransition>
                  {/* <AuthorBooksPage /> */}
                  <BooksPage />
                </PageTransition>
              }
            />
            <Route
              path='/materials'
              element={
                <PageTransition>
                  <Materials />
                </PageTransition>
              }
            />
          </Routes>
        </AnimatePresence>
      </Suspense>
    </ErrorBoundary>
  );
};

export default AppRoutes;
