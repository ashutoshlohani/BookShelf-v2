import * as React from 'react';
import { useParams } from 'react-router-dom';
import { client } from '../utils/api-client';
import { useAsync } from '../utils/hooks';

const BookDetails = () => {
   const { bookId } = useParams();
   const { data, run } = useAsync();

   React.useEffect(() => {
      run(client(`/volumes/${bookId}`));
   }, [run, bookId]);

   console.log(data);

   return <h1>BookDetails</h1>;
};

export default BookDetails;
