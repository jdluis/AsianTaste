import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import ClientProfile from './pages/client/ClientProfile';
import NoFoundPage from './pages/NoFoundPage';
import NavMenu from './components/Mobile/NavMenu';
import SignBtn from './components/Auth/SignBtn';
import { useAuth0 } from "@auth0/auth0-react";
import Profile from './components/Auth/Profile';
import Reservations from './pages/client/Reservations';
import FullMenu from './pages/client/FullMenu';
import Reserves from './pages/admin/Reserves';
import AdminPanel from './pages/admin/AdminPanel';
import LocalOrders from './pages/admin/LocalOrders';

import './App.css';
import AdminLoginBtn from './components/Auth/AdminLoginBtn';

function App() {
  const { isAuthenticated, user } = useAuth0();
  const testingAdminRoutes = true; /*JUST FOR TESTING testing --> testingAdminRoutes */

  return (
    <>
      <BrowserRouter>
        <NavMenu />
        <Profile />
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path="/menu" element={<FullMenu />} />
          </Route>
          {/*           Para añadir rutas a la misma pagina,  slo ue quiero con el home*/}
          {isAuthenticated && (
            <Route path="/client">
              <Route index element={<ClientProfile />} />
              <Route path="reservation" element={<Reservations />} />
            </Route>
          )}

            {/*JUST FOR TESTING testing --> testingAdminRoutes */}
          {isAuthenticated && user?.email === adminName || testingAdminRoutes === true  && ( 
            <Route path="/admin">
              <Route index element={<AdminPanel />} />
              <Route path="reservations" element={<Reserves />} />
              <Route path="localDeliverys" element={<LocalOrders />} />
            </Route>

           )} 

          <Route path='/adminlg' element={<AdminLoginBtn />} />
          <Route path='/sign' element={<SignBtn />} />
          <Route path="*" element={<NoFoundPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

