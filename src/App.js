import * as React from 'react';
import { UserAuthContext } from './context/userAuth.context.jsx';

import AuthenticationPage from './screen/authenticationPage';
import HomePage from './screen/homePage';

function App() {
   const { currentUser } = React.useContext(UserAuthContext);

   if (currentUser) {
      return <HomePage />;
   } else {
      return <AuthenticationPage />;
   }
}

export default App;
