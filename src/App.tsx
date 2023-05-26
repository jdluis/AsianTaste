import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/Home';
import ClientProfile from './pages/client/ClientProfile';
import NoFoundPage from './pages/NoFoundPage';
import NavMenu from './components/Mobile/NavMenu';
import SignBtn from './components/Auth/SignBtn';
import { Auth0Provider } from '@auth0/auth0-react';
import LogoutButton from './components/Auth/LogOutBtn';
import Profile from './components/Auth/Profile';
import './App.css';


function App() {
  return (
    <>
      <BrowserRouter>
        <Auth0Provider
          domain={import.meta.env.VITE_AUTH0_DOMAIN}
          clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
          authorizationParams={{
            redirect_uri: window.location.origin
          }}
        >
          <NavMenu />
          <div className='floating_container circle'>
             <LogoutButton />
              <SignBtn />
          </div>
          <Profile />
          <Routes>
            <Route path="/">
              <Route index element={<HomePage />} />
              {/* <Route path="/menu" /> */}
            </Route>
            {/*           Para añadir rutas a la misma pagina,  slo ue quiero con el home*/}
            <Route path="/client">
              <Route index element={<ClientProfile />} />
              <Route path=":number" element={<ClientProfile />} />
            </Route>

            {/* <Route path="/admin">
            <Route index element={<AdminPanel />} />
            <Route path="/reservations" element={<Reserves />} />
            <Route path="/localDeliverys" element={<LocalDelivery />} />
          </Route> */}
            <Route path='/sign' element={<SignBtn />} />
            <Route path="*" element={<NoFoundPage />}></Route>
          </Routes>
        </Auth0Provider>
      </BrowserRouter>
    </>
  )
}

export default App

