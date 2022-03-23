import { useQuery } from 'react-query';
import LoadingIndicator from '../../components/shared/loader/LoadingIndicator.component';
import AuthorCardContainer from '../../components/author-card/AuthorCard.component';
import AuthorInput from '../../components/author-filter/AuthorFilter.component';
import ApiRequest from '../../lib/ApiRequest';

const fetchAuthor = () =>
  new ApiRequest('/author', 'GET', null, null, true).request();

const useAuthor = () => {
  const { data, isLoading } = useQuery('author', fetchAuthor);

  const authorCards = () => {
    if (isLoading) return <LoadingIndicator />;
    return (
      <>
        <AuthorInput />
        <AuthorCardContainer authors={data || []} />
      </>
    );
  };

  return [authorCards];
};

export default useAuthor;
