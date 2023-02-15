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
      <button className={'btn-modal-paypal'} type="submit"><img src="/img/paypal-btn.png" alt=""/></button>
    </form>
  </div>
`

const sendForm = (form:HTMLElement)=>{
  console.log(form);
}


const Subscriptions = () => {
  const handledModal = (e:any)=>{
    e.preventDefault();
    const modal = document.createElement("div")
    modal.classList.add("modalForm")
    modal.innerHTML = modalElement
    document.body.appendChild(modal)
    const form:any =  modal.querySelector("form")
    form.addEventListener('submit', (e:any)=>{
      e.preventDefault()
      sendForm(e.target)
    })
  }
  return(
    <section className="section center subscriptions">
      <figure className={'subscriptions__figure'} >
        <figcaption>Suscripción a TRADEPLOY</figcaption>
        <p>Suscripción mensual: <span>USD $200.00</span></p>
        <div className="button-container">
          <button className={'btn paypal'} type="button" onClick={handledModal}><img src="/img/paypal-btn.png" alt=""/></button>
        </div>
      </figure>
    </section>
  )
}

export default Subscriptions
