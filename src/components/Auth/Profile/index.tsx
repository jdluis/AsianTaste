import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../LogOutBtn";
import SignBtn from "../SignBtn";
import "./style.css"

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(user, isAuthenticated)

  if (isLoading) {
    return (<div>Loading ...</div>)
  }

  return (
    <>
      <div className='floating_container circle'>
            {user?.email ? <LogoutButton /> : <SignBtn />}
      </div>
      {isAuthenticated && (
        <div className="profile_container">
          <div className="img_container">
            <img src={user?.picture} alt={user?.name} />
          </div>
          <h2 className="profile_name">{user?.name}</h2>
        </div>
      )}
    </>
  );
};

export default Profile;