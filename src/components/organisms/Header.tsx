// @ts-nocheck
// import {Link} from "react-router-dom";
// import {useUserStore} from "../../store/userStore";
// import {useEffect, useState} from "react";
// import {useUserStore} from "../../store/User";

import {Link} from "react-router-dom";
import Menu from "../molecules/Menu";

const Header = ({subscription}) => {
  // const [user, setUser] = useState(null);
  // const {user,setUser} = useUserStore()
  // useEffect(() => {
  //   console.log(user)
  // }, []);
  return (
    <header className={'main-header'}>
      <div className="main-logo">
        <Link to={'/'}>
          <img src="/img/logo.svg" alt="Logo Tradeploy"/>
        </Link>
      </div>
      <nav className="main-nav">
        <Menu/>
      </nav>
      {
        !subscription ? (
          <Link to={'/suscripcion'} className={'btn btn-dark btn-subscribe'}>
            Suscribirse
          </Link>
        ) : null
      }

    </header>
  );
}

export default Header;
