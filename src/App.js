import * as React from 'react';
import { UserAuthContext } from './context/userAuth.context.jsx';

import AuthenticationPage from './screen/authenticationPage';
import DiscoverPage from './screen/discoverPage';

function App() {
   const { currentUser } = React.useContext(UserAuthContext);

   if (currentUser) {
      return <DiscoverPage />;
   } else {
      return <AuthenticationPage />;
   }
}

export default App;
