// @ts-nocheck
// import {Link} from "react-router-dom";
// import {useUserStore} from "../../store/userStore";
import {useEffect, useRef, useState} from "react";
// import {useUserStore} from "../../store/User";

import {Link} from "react-router-dom";
import Menu from "../molecules/Menu";
import Hamburger from "../molecules/Hamburguer";

const Header = ({subscription}) => {
  const [active, setActive] = useState(false);
  const ToggleMenuFunction = () => {
    !active ? setActive(true) : setActive(false);
  };
  return (
    <header className={'main-header'}>
      <div className="main-logo">
        <Link to={'/'} className="logo">
          <img src="/img/logo.svg" alt="Logo Tradeploy"/>
        </Link>
      </div>
      <nav className="main-nav">
        <Hamburger  active={active} action={ToggleMenuFunction}/>
        <Menu active={active} action={ToggleMenuFunction} />
      </nav>
      {
        !subscription ? (
          // <Link to={'/suscripcion'} className={'btn btn-dark btn-subscribe'}>
          //   Suscribirse
          // </Link>
          <a href="https://t.me/tradeploy" target="_blank" className={'btn btn-dark btn-subscribe'}>
            Aprende Gratis
          </a>
        ) : null
      }

    </header>
  );
}

export default Header;
