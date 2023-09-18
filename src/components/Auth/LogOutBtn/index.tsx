import { useAuth0 } from "@auth0/auth0-react";
import LogoutIcon from '@mui/icons-material/Logout';
import './style.css';

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button className="btn-logout" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      <LogoutIcon />
    </button>
  );
};

export default LogoutButton;