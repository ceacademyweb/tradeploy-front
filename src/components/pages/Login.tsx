import {useUserStore} from "../../store/User";
import {useNavigate} from "react-router-dom";
import {set} from "video.js/dist/types/tech/middleware";

const Login = () => {
  const nav = useNavigate()
  const {setUser} = useUserStore()

  const handledSubmit = (e:any)=>{
    e.preventDefault()
    const data = new FormData(e.target)
    const dataObj = Object.fromEntries(data.entries())
    console.log(dataObj)
    fetch("https://ceacademy-auth-production.up.railway.app/login",{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(dataObj)
    })
      .then(res=>res.json())
      .then(res=>{
        console.log(res)
        const obj={
          id: res.userData.id,
          name: res.userData.name,
          email: res.userData.email,
          subscriptionActive: true,
          isLogged: true,
        }
        setUser(obj)
        sessionStorage.setItem("user",JSON.stringify(obj))
        nav("/suscripcion")
      })

    // const obj={
    //   name: "Jorge",
    //   email: "tino@hotmail.com",
    //   subscriptionActive: true,
    //   isLogged: true,
    // }
    // setUser(obj)
    // nav("/suscripcion")
  }

  return(
    <section className="login">
      <form action="" onSubmit={handledSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email"/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password"/>
        </div>
        <button type="submit">Login</button>
      </form>
    </section>
  )
};
export default Login;
