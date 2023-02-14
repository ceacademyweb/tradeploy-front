import {Outlet, useNavigate} from "react-router-dom";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import {useEffect, useState} from "react";
import {useUserStore} from "../../store/User";
import {useSessionStorage} from "../../hooks/useSessionStorage";

const setUserFN =  () => {
  const sessionStorageUser: any =  (sessionStorage.getItem("user"))
  return !sessionStorageUser ? null : JSON.parse(sessionStorageUser)
}
const AuthTemplate = () => {
  const [auth, setAuth] = useState(true);
  const {user,setUser} = useUserStore()
  const nav = useNavigate()
  useEffect(() => {
    setUser(setUserFN())
    console.log(setUserFN())
    if (!setUserFN()) {
      nav("/login")
    }

  }, []);
  return (
    <>
      <Header subscription={false}/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </>
  );
};

export default AuthTemplate;
