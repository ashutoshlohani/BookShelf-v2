import * as React from 'react';
// import { Outlet, Link } from 'react-router-dom';
import { signOutUser } from '../utils/firebase.config';
import { UserAuthContext } from '../context/userAuth.context';

import '../styles/navbar.styles.scss';

const NavBar = () => {
   const { currentUser } = React.useContext(UserAuthContext);

   const email = currentUser.email;
   const userName = email.slice(0, email.indexOf('@'));
   const userAvatar = `https://avatars.dicebear.com/api/gridy/${userName}.svg`;

   return (
      <>
         <div className='navbar'>
            <div className='logo'>
               <a href='1' className='logo-text'>
                  Book
                  <span>Shelf</span>
               </a>
            </div>
            <div className='menu-items'>
               <a href='1' className='nav-links'>
                  Discover
               </a>
               <a href='1' className='nav-links'>
                  Reading List
               </a>
               <a href='1' className='nav-links'>
                  Finished Books
               </a>
            </div>
            <div className='user'>
               <div className='user-details'>
                  <div className='user-image'>
                     <img alt='user avatar' src={userAvatar} />
                  </div>
                  <div className='user-name'>{userName}</div>
               </div>
               <div className='logout'>
                  <button onClick={signOutUser} className='logout-button'>
                     Log out
                  </button>
               </div>
            </div>
         </div>
         {/* <Outlet /> */}
      </>
   );
};

export default NavBar;
