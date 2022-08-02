import * as React from 'react';
import { onAuthStateChangedListner } from '../utils/firebase.config.js';

export const UserAuthContext = React.createContext({
   currentUser: null,
   setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
   const [currentUser, setCurrentUser] = React.useState(null);

   React.useEffect(() => {
      const unsubscribe = onAuthStateChangedListner(user => {
         setCurrentUser(user);
      });
      return unsubscribe;
   }, [currentUser]);

   const value = { currentUser, setCurrentUser };

   return <UserAuthContext.Provider value={value}>{children}</UserAuthContext.Provider>;
};
