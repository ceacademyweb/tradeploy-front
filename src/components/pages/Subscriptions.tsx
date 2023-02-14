import {useUserStore} from "../../store/User";
import {API_LINK} from "../../helpers/api";

const modalElement = `
  <div class="modalForm__content">
    <div class="modalForm__close"></div>
    <form class="modalForm__form" action="http:/localhost:5000/create-payment">
      <div class="form-group">
        <label for="name">Nombre</label>
        <input required type="text" name="name" id="name" value=""/>
      </div>
      <div class="form-group">
        <label for="surname">Apellido</label>
        <input required type="text" name="surname" id="surname" value=""/>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input required type="email" name="email" id="email" value=""/>
      </div>
      <div class="form-group">
        <label for="telegram">Telegram</label>
        <input required type="text" name="telegram" id="telegram" value=""/>    
      </div>  
      <button type="submit" class="btn btn-dark">Pagar</button>
    </form>
  </div>
`
const sendForm = (form:any)=>{
  const button = form.querySelector("button")
  button.innerHTML = "Procesando..."
  const data = new FormData(form)
  const dataObj = Object.fromEntries(data.entries())
  fetch(`${API_LINK}/create-payment`,{
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(dataObj)
  })
    .then(res=>res.json())
    .then(res=>{
      console.log(res)
      window.location.href = res.links[1].href
    })
}
const Subscriptions = () => {
  const {user} = useUserStore()
  const handledModal = (e:any)=>{
    const modal = document.createElement("div")
    modal.classList.add("modalForm")
    modal.innerHTML = modalElement
    document.body.appendChild(modal)
    const form:any =  modal.querySelector("form")
    form.addEventListener('submit', (e:any)=>{
      e.preventDefault()
      sendForm(e.target)
    })
    const close:any = modal.querySelector(".modalForm__close")
    close.addEventListener('click', ()=>{
      modal.remove()
    })
  }
  return(
    <section className="subscriptions">
      <figure className={'subscriptions__figure'} >
        <figcaption>Subscripcion a TRADEPLOY</figcaption>
        <p>Suscripción mensual: <span>USD $20.00</span></p>
        <div className="button-container">
          <button className={'btn btn-dark'} type="submit" onClick={handledModal}>Pagar con PayPal</button>
        </div>
      </figure>
    </section>

  )
}

export default Subscriptions
