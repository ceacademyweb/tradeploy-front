import {Outlet} from "react-router-dom";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
const SubscriptionsTemplate = () => {
  return (
    <>
      <Header subscription={true}/>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default SubscriptionsTemplate
