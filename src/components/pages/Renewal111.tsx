import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import axios from "axios";
import env from "react-dotenv";

const Renewal111 = () => {
  const { id } = useParams()
  const [user, setUser] = useState<any>(id)
  useEffect(()=>{
    console.log(env.API_URL)
    // axios.get(`http://localhost:5000/user/${id}`)
  },[])

  return (
    <div>
      <h1>Renewal</h1>
    </div>
  )
 }

 export default Renewal111
