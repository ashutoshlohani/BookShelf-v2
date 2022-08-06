import * as React from 'react';

import { Routes, Route } from 'react-router-dom';

import NavBar from '../components/navbar.component';
import DiscoverPage from './discoverPage';
import ReadingList from './readingList';
import FinishedBooks from './finishedBooks';
import BookDetails from '../components/bookDetails';
import NotFound from '../components/notFound';

const HomePage = () => {
   return (
      <>
         <Routes>
            <Route path='/' element={<NavBar />}>
               <Route index element={<DiscoverPage />} />
               <Route path='/readingList' element={<ReadingList />} />
               <Route path='/finishedBooks' element={<FinishedBooks />} />
               <Route path='/book/:bookId' element={<BookDetails />} />
               <Route path='*' element={<NotFound />} />
            </Route>
         </Routes>
      </>
   );
};

export default HomePage;
