import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import ClientProfile from './pages/client/ClientProfile';
import NoFoundPage from './pages/NoFoundPage';
import NavMenu from './components/Mobile/NavMenu';
import './App.css';

function App() {

  function handleCallbackResponse(response: { credential: string; }) {
    console.log("Encoded JWT ID token: " + response.credential)
  }

/*   useEffect(() => {
    // global google
    google.accounts.id.id.initialize({
      client_id: process.env.GOOGLE_AUTH_ID,
      callback: handleCallbackResponse
    })

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {theme: "outline", size: "large"}
    )
  }, []) */
  
  return (
    <>
      <BrowserRouter>
        <NavMenu />
        <div>
          <div id="signInDiv"></div>
        </div>
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

          <Route path="*" element={<NoFoundPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
function useEffect(arg0: () => void, arg1: never[]) {
  throw new Error('Function not implemented.');
}

