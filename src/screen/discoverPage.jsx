import React from 'react';

import BookCardList from '../components/book-card-list';
import SearchBar from '../components/search-bar';

import { client } from '../utils/api-client';
import { useAsync } from '../utils/hooks';

const DiscoverPage = () => {
   const { data: booksData, error, run, isLoading, isError, isSuccess } = useAsync();

   const [query, setQuery] = React.useState();
   const [queried, setQueried] = React.useState(false);

   React.useEffect(() => {
      if (!queried) {
         return;
      }

      run(client(`/volumes?q=${encodeURIComponent(query)}&maxResults=5`));
   }, [queried, query, run]);

   function handleSubmit(event) {
      event.preventDefault();
      setQueried(true);
      setQuery(event.target.elements.search.value);
   }

   return (
      <>
         <SearchBar
            handleSubmit={handleSubmit}
            isLoading={isLoading}
            isError={isError}
            error={error}
         />

         {isSuccess ? (
            booksData?.items?.length ? (
               <BookCardList booksData={booksData} />
            ) : (
               <p>No books found. Try another search.</p>
            )
         ) : null}
      </>
   );
};

export default DiscoverPage;
