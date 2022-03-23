import { useQuery } from 'react-query';
import LoadingIndicator from '../../components/shared/loader/LoadingIndicator.component';
import BookCardComponent from '../../components/book-card/BookCard.component';
import BookCardHeader from '../../components/book-card/BookCardHeader.component';
import BooksFilter from '../../components/book-filter/BookFilters.component';
import ApiRequest from '../../lib/ApiRequest';

const fetchDashboardData = () =>
  new ApiRequest('/book/search', 'GET', null, null, true).request();

const fetchAuthor = () =>
  new ApiRequest('/author', 'GET', null, null, true).request();

const useBook = () => {
  const { data, isLoading } = useQuery('dashboard', fetchDashboardData);
  const { data: authors } = useQuery('author', fetchAuthor, {
    enabled: !!data,
  });

  const bookFilters = () => {
    if (isLoading) return <LoadingIndicator />;
    return (
      <>
        <BooksFilter
          categories={data?.category || []}
          authors={authors || []}
        />
        <div className='space-y-2 py-20'>
          <BookCardHeader />
          <BookCardComponent books={data?.book || []} />
        </div>
      </>
    );
  };

  return [bookFilters];
};

export default useBook;
