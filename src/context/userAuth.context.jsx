import * as React from 'react';
import { onAuthStateChangedListner } from '../utils/firebase.config.js';

export const UserAuthContext = React.createContext({
   currentUser: null,
   setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
   const [currentUser, setCurrentUser] = React.useState(null);
   console.log(currentUser);

   React.useEffect(() => {
      const unsubscribe = onAuthStateChangedListner(user => {
         setCurrentUser(user);
         console.log(user);
      });
      return unsubscribe;
   }, [currentUser]);

   const value = { currentUser, setCurrentUser };

   return <UserAuthContext.Provider value={value}>{children}</UserAuthContext.Provider>;
};
