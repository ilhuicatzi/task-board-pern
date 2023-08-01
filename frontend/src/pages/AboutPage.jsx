

function AboutPage() {
  return (
    <div className="w-3/4 flex flex-col items-center mx-auto">

      <h1 className="text-3xl font-semibold my-6 text-center">About Page</h1>
      <p className="text-lg font-mono text-slate-300 text-justify mb-4">
      TaskBoard es una completa aplicación web de gestión de tareas diseñada con tecnologías Full-Stack PERN (Postgres, Express, React, y Node). Su principal objetivo es proporcionar a los usuarios una herramienta eficiente y sencilla para organizar y gestionar sus notas y actividades diarias. Con TaskBoard, los usuarios pueden registrar y autenticarse de manera segura mediante tokens JWT, lo que garantiza la privacidad de sus datos.
      </p>

      <p className="text-lg font-mono text-slate-300 text-justify mb-4">
      La aplicación destaca por su interfaz de usuario intuitiva y moderna, desarrollada con React y estilizada con Tailwind CSS. Además, TaskBoard se integra con una base de datos PostgreSQL, asegurando un acceso rápido y fiable a la información almacenada.
      </p>

      <p className="text-lg font-mono text-slate-300 text-justify mb-4">
      TaskBoard se posiciona como una solución todo-en-uno para la gestión de tareas, ofreciendo una experiencia de usuario fluida y una plataforma segura para mejorar la productividad y mantener el enfoque en los objetivos diarios.
      </p>

      <p className="text-lg font-mono text-slate-300 text-justify mb-4">
      ¡Regístrate en TaskBoard hoy mismo y descubre una nueva forma de organizarte y avanzar hacia tus metas!
      </p>

    </div>
  )
}

export default AboutPage