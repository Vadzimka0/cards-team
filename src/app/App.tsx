import { HashRouter } from 'react-router-dom';

import { AppRoutes } from './AppRoutes';

import { Navbar } from 'components/navbar/Navbar';
import { ReturnComponentType } from 'types';

export const App = (): ReturnComponentType => (
  <>
    <HashRouter>
      <Navbar />
      <main>
        <AppRoutes />
      </main>
    </HashRouter>
  </>
);
