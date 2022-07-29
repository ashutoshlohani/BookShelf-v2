import * as React from 'react';
import { LoginForm, RegisterForm } from '../components/form';
import '../styles/unauthenticatedApp.scss';
import '../styles/form.styles.scss';

function UnauthenticatedApp() {
   const [state, setState] = React.useState('login');

   return (
      <div className='landing-page'>
         <div className='left-side'>
            <div className='logo-continer'>
               <h1>BookShelf</h1>
               <p>Find your next book from our shelf</p>
            </div>
         </div>

         <div className='right-side'>
            {state === 'login' ? (
               <LoginForm changeState={() => setState('register')} />
            ) : (
               <RegisterForm changeState={() => setState('login')} />
            )}
         </div>
      </div>
   );
}

export default UnauthenticatedApp;
