import { useState } from 'react';
import { useQuery } from 'react-query';
import LoadingIndicator from '../../components/shared/loader/LoadingIndicator.component';
import BookCardComponent from '../../components/book-card/BookCard.component';
import BookCardHeader from '../../components/book-card/BookCardHeader.component';
import BooksFilter from '../../components/book-filter/BookFilters.component';
import ApiRequest from '../../lib/ApiRequest';
import useDebounce from './useDebounce';

const fetchDashboardData = () =>
  new ApiRequest('/book/search', 'GET', null, null, true).request();

const fetchAuthor = () =>
  new ApiRequest('/author', 'GET', null, null, true).request();

const fetchFilteredBook = (page, category, author, title) => {
  const categoryData = category ? `category=${category}&` : '';
  const authorData = author?.id ? `author=${author?.id}&` : '';
  const pageData = page ? `page=${page}&` : '';
  const titleData = title ? `title=${title}&` : '';
  return () =>
    new ApiRequest(
      `/book?${pageData}${categoryData}${authorData}${titleData}`,
      'GET',
      null,
      null,
      true
    ).request();
};

const useBook = (authorId) => {
  console.log(authorId, 4);
  const [page] = useState(1);
  const [title, setTitle] = useState('');
  const searchTerm = useDebounce(title, 600);
  const [author, setAuthor] = useState({
    id: authorId || '',
    name: '',
  });
  const [category, setCategory] = useState('');

  const { data, isLoading } = useQuery('books', fetchDashboardData);
  const { data: authors } = useQuery('author', fetchAuthor, {
    enabled: !!data,
  });

  const { data: searchResults, isLoading: filterLoading } = useQuery(
    ['search', category, author?.id, searchTerm],
    fetchFilteredBook(page, category, author, searchTerm),
    {
      enabled: !!(category || author.id || searchTerm),
    }
  );

  const books = searchResults || data?.book || [];

  const bookFilters = () => {
    if (isLoading) return <LoadingIndicator />;
    return (
      <>
        <BooksFilter
          categories={data?.category || []}
          authors={authors || []}
          category={category}
          author={author}
          setCategory={setCategory}
          setAuthor={setAuthor}
          title={title}
          setTitle={setTitle}
        />
        {books?.length ? (
          <div className='space-y-2 py-20'>
            <BookCardHeader />
            {!(isLoading || filterLoading) && (
              <BookCardComponent books={books} />
            )}
          </div>
        ) : (
          <p className='text-center text-slate-800 dark:text-white'>
            No Data Found :(
          </p>
        )}
      </>
    );
  };

  return [bookFilters];
};

export default useBook;
