import {Outlet} from "react-router-dom";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
const AppTemplate = () => {
  return (
    <>
      <Header subscription={true}/>
      <main>
        <Outlet />
      </main>
      <Footer/>
    </>
  )
}

export default AppTemplate
