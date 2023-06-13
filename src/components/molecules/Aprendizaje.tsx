
const Aprendizaje = () => {
  return (
    <section className="Aprendizaje">
      <h1>Aprendizaje Real</h1>
      <div className="planes">
        <div className="plan mensual">
          <h3>Plan Mensual</h3>
          <p>Para un aprendizaje casual</p>
          <ul className="planes__list">
            <li>Accesso Discord durante un mes</li>
            <li>Personal Journal</li>
            <li>Mentoria Grupal</li>
            <li>Signals y Hacks</li>
            <li>Newsletter</li>
          </ul>
        </div>
        <div className="plan anual">
          <h3>Plan Anual</h3>
          <p>Para un aprendizaje constante</p>
          <ul className="planes__list">
            <li>Accesso Discord anual</li>
            <li>Personal Journal</li>
            <li>Mentoria Personalizada</li>
            <li>Entrenamiento 1:1</li>
            <li>Signals y Hacks</li>
            <li>Newsletter</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Aprendizaje
