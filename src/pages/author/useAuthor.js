import { useQuery } from 'react-query';
import LoadingIndicator from '../../components/shared/loader/LoadingIndicator.component';
import AuthorCardContainer from '../../components/author-card/AuthorCard.component';
import AuthorInput from '../../components/author-filter/AuthorFilter.component';
import ApiRequest from '../../lib/ApiRequest';
import { useState } from 'react';
import useDebounce from '../books/useDebounce';

const fetchAuthor = () =>
  new ApiRequest('/author', 'GET', null, null, true).request();

const filterAuthor = (authorName) => {
  console.log(authorName);
  return () =>
    new ApiRequest(
      `/author?authorName=${authorName}`,
      'GET',
      null,
      null,
      true
    ).request();
};

const useAuthor = () => {
  const [author, setAuthor] = useState('');
  const searchAuthor = useDebounce(author, 600);

  const { data, isLoading } = useQuery('author', fetchAuthor);

  const {
    data: filteredAuthor,
    refetch,
    isLoading: filterLoader,
  } = useQuery(['filterAuthor', searchAuthor], filterAuthor(searchAuthor), {
    enabled: false,
  });

  const handleSubmit = () => refetch();

  const authors = filteredAuthor || data || [];

  const authorCards = () => {
    if (isLoading) return <LoadingIndicator />;
    return (
      <>
        <AuthorInput setAuthor={setAuthor} handleSubmit={handleSubmit} />
        {authors?.length ? (
          !filterLoader && <AuthorCardContainer authors={authors} />
        ) : (
          <p className='text-center text-slate-800 dark:text-white'>
            No Author found
          </p>
        )}
      </>
    );
  };

  return [authorCards];
};

export default useAuthor;
