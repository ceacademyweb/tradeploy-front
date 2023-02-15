// @ts-nocheck
import {menu} from "../../utils/menu";
import {NavLink} from "react-router-dom";


const Menu = ({ active, action }) => {
  // console.log(elem)
  const clickMenu = ({target}) => {
    document.querySelector('.toggleMenu').click()
  }
  return(
    <ul className={`main-menu ${active ? 'is-active' : ''}`}>
      {
        menu.map((item, index) => (
          <li className={'main-menu__item'} key={index}>
            <NavLink onClick={clickMenu} to={item.path} className={'main-menu__link'} key={index}>
              {item.title}
            </NavLink>

          </li>
        ))
      }
    </ul>
  )
}

export default Menu
