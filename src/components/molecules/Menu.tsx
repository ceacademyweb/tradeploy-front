import {menu} from "../../utils/menu";
import {NavLink} from "react-router-dom";


const Menu = () => {
  return(
    <ul className={'main-menu'}>
      {
        menu.map((item, index) => (
          <li className={'main-menu__item'}>
            <NavLink to={item.path} className={'main-menu__link'} key={index}>
              {item.title}
            </NavLink>

          </li>
        ))
      }
    </ul>
  )
}

export default Menu
