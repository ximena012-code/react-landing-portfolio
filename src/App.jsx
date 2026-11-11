export default function App() {
  return (
    <div className="page">
      <header className="hero">
        <p className="eyebrow">Portfolio</p>
        <h1>Ximena Sarrazola Bustamante</h1>
        <p className="lead">
          Analista QA con base en Frontend. Pruebas funcionales, criterios de aceptación y interfaces en React.
        </p>
        <div className="actions">
          <a className="btn primary" href="https://github.com/ximena012-code" target="_blank" rel="noreferrer">GitHub</a>
          <a className="btn" href="#proyectos">Ver proyectos</a>
        </div>
      </header>

      <section id="proyectos" className="section">
        <h2>Proyectos destacados</h2>
        <div className="grid">
          <article className="card">
            <h3>QA — Casos de prueba Odoo Portal</h3>
            <p>Casos, matriz pass/fail y cobertura de permisos, paginación e i18n.</p>
          </article>
          <article className="card">
            <h3>QA — Bug reports</h3>
            <p>Plantilla y ejemplos de defectos accionables para equipos de producto.</p>
          </article>
          <article className="card">
            <h3>React — API demo</h3>
            <p>Mini app que consume una API pública y muestra estados de carga/error.</p>
          </article>
        </div>
      </section>

      <footer className="footer">
        <span>Medellín, Colombia</span>
        <a href="mailto:ximenasarrazolabustamante@gmail.com">ximenasarrazolabustamante@gmail.com</a>
      </footer>
    </div>
  )
}
