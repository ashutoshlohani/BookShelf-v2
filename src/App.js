import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { useAsync } from './utils/hooks';

import FullPageSpinner from './components/fullPageSpinner';
import AuthenticatedApp from './pages/authenticated';
import UnauthenticatedApp from './pages/unauthenticated';
import { UserAuthContext } from './context/userAuth';

function App() {
   const { currentUser } = React.useContext(UserAuthContext);

   const { error, isLoading, isIdle, isError, isSuccess } = useAsync();

   if (isLoading || isIdle) {
      return <FullPageSpinner />;
   }

   if (isError) {
      return (
         <div>
            <p>Uh oh... There's a problem. Try refreshing the app.</p>
            <pre>{error.message}</pre>
         </div>
      );
   }

   if (isSuccess) {
      return currentUser ? (
         <Router>
            <AuthenticatedApp />
         </Router>
      ) : (
         <UnauthenticatedApp />
      );
   }
}

export default App;
