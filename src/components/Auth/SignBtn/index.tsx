import { FC } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './style.css';

interface SignBtnProps { }

const SignBtn: FC<SignBtnProps> = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()}>SignIn</button>
}

export default SignBtn;