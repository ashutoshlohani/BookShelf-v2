import * as React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import { UserAuthContext } from './context/userAuth.context.jsx';
import { useAsync } from './utils/hooks';

import AuthenticationPage from './screen/authenticationPage';
import HomePage from './screen/homePage';
import FullPageSpinner from './components/fullPageSpinner';

function App() {
   const { error, isLoading, isIdle, isError, isSuccess, run } = useAsync();
   const { currentUser } = React.useContext(UserAuthContext);

   return currentUser ? (
      <Router>
         <HomePage />
      </Router>
   ) : (
      <AuthenticationPage />
   );

   // React.useEffect(() => {
   //    run(currentUser);
   // }, [currentUser, run]);

   // if (isLoading || isIdle) {
   //    return <FullPageSpinner />;
   // }

   // if (isError) {
   //    return (
   //       <div>
   //          <p>Uh oh... There's a problem. Try refreshing the app.</p>
   //          <pre>{error.message}</pre>
   //       </div>
   //    );
   // }

   // if (isSuccess) {
   //    return currentUser ? (
   //       <Router>
   //          <HomePage />
   //       </Router>
   //    ) : (
   //       <AuthenticationPage />
   //    );
   // }
}

export default App;
