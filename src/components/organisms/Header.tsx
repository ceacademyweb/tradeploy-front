// @ts-nocheck
// import {Link} from "react-router-dom";
// import {useUserStore} from "../../store/userStore";
// import {useEffect, useState} from "react";
// import {useUserStore} from "../../store/User";

import {Link} from "react-router-dom";

const Header = ({subscription}) => {
  // const [user, setUser] = useState(null);
  // const {user,setUser} = useUserStore()
  // useEffect(() => {
  //   console.log(user)
  // }, []);
  return (
    <header className={'main-header'}>
      <div className="main-logo">
        <img src="/img/logo.svg" alt="Logo Tradeploy"/>
      </div>
      {
        !subscription ? (
          <Link to={'/suscribirse'} className={'btn btn-dark'}>
            Suscribirse
          </Link>
        ) : null
      }

    </header>
  );
}

export default Header;
