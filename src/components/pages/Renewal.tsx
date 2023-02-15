import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import videojs from "video.js";
import any = videojs.any;
import dayjs from "dayjs";
import {API_LINK} from "../../helpers/api";

const Renewal =  () => {
  const {id} = useParams();
  const [user, setUser] = useState<any>([]);

  useEffect(() => {
    axios.get(`${API_LINK}/user/${id}`)
      .then(res => {setUser(res.data)})
  },[])
  const vincular = (e:any) => {
  }
  return (
    <section className={'section newUser'}>
      {
        user.length > 0 && user[0].subscribed ?
        user.map((us:any) =>{
          return (
            <div key={us._id} className={'center child'}>
              <h2>Gracias {us.name} por renovar tu suscripción a TRADEPLOY</h2>
              <p>Suscripción Valida hasta {dayjs(us.subscribedUntil).format('DD/MM/YYYY')}</p>
              <a href="http://localhost:5000/vincular" onClick={vincular} className={'btn btn-dark'}>Vicular Telegram</a>
            </div>
          )
        })
        :
          (<h2>Usuario no encontrado</h2>)
      }
    </section>
  );
};

export default Renewal;
