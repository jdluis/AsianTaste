import { FC } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginIcon from '@mui/icons-material/Login';
import './style.css';

interface SignBtnProps { }

const SignBtn: FC<SignBtnProps> = () => {
  const { loginWithRedirect } = useAuth0();

  return <button className="btn-signup" onClick={() => loginWithRedirect()}>
    <LoginIcon />
  </button>
}

export default SignBtn;