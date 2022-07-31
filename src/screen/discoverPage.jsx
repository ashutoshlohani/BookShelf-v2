import React from 'react';

import BookCardList from '../components/book-card-list';
import SearchBar from '../components/search-bar';

import { client } from '../utils/api-client';

const DiscoverPage = () => {
   const [status, setStatus] = React.useState('idle');
   const [booksData, setBooksData] = React.useState();
   const [query, setQuery] = React.useState();
   const [queried, setQueried] = React.useState(false);

   const isLoading = status === 'loading';
   const isSuccess = status === 'success';

   React.useEffect(() => {
      if (!queried) {
         return;
      }
      setStatus('loading');
      client(`/volumes?q=${encodeURIComponent(query)}&maxResults=5`).then(responseData => {
         setBooksData(responseData);
         setStatus('success');
      });
   }, [queried, query]);

   function handleSubmit(event) {
      event.preventDefault();
      setQueried(true);
      setQuery(event.target.elements.search.value);
   }

   return (
      <>
         <SearchBar handleSubmit={handleSubmit} isLoading={isLoading} />

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
