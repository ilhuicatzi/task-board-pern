import { Link } from "react-router-dom";
import { BiLogoPlayStore } from "react-icons/bi";

function HomePage() {
  return (
    <div>
      <aside className="relative overflow-hidden text-white rounded-lg sm:mx-16 mx-2 sm:py-16">
        <div className="relative z-10 max-w-screen-xl px-4 pb-10 pt-10 sm:py-20 mx-auto sm:px-6 lg:px-8">
          <div className="flex flex-col items-end max-w-xl sm:mt-48 mt-56 lg:mt-1  space-y-8 text-center sm:text-right sm:ml-auto">
            <h2 className="text-4xl font-bold sm:text-6xl flex flex-col justify-end items-end">
              <div>
                <span className="text-sky-500">Task</span>
                <span className="hidden min-[320px]:inline-block text-stone-300">
                  Board
                </span>
              </div>
              <span className="hidden lg:block text-2xl italic w-3/4 text-end">
                ¡Productividad y Organización al Alcance de Tu Mano!
              </span>
            </h2>

            <Link
              className="w-1/2 inline-flex   text-white items-center sm:px-6 sm:py-3 font-semibold bg-rose-500 rounded-lg  hover:bg-emerald-600 hover:justify-end transition duration-800"
              to="/register"
            >
              <BiLogoPlayStore className="w-10 h-10 mr-3" /> 
              <span className="sm:text-lg hidden min-[320px]:block ">Try now</span>
            </Link>
          </div>
        </div>

        <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full">
          <img className="w-96" src="https://i.ibb.co/2M7rtLk/Remote1.png" />
        </div>

        <div className="flex justify-center items-center">
          <p className="hidden md:block text-lg w-3/4 text-center">
            TaskBoard es una innovadora aplicación web Full-Stack creada con el
            poderoso conjunto de tecnologías PERN: PostgreSQL, Express, React y
            Node. Su objetivo principal es ofrecer a los usuarios una plataforma
            versátil y amigable para gestionar y organizar sus notas,
            actividades y tareas diarias. Lo mejor de todo, ¡solo necesitas
            registrarte o iniciar sesión para empezar a aprovechar todas sus
            funciones!
          </p>
        </div>
      </aside>

      <footer className="text-center">
        <hr />
        <p className="text-center py-3">
          Crafted with by{" "}
          <span className="font-semibold">
            <Link to="/">g.ilhuicatzi@gmail.com</Link>
          </span>
        </p>
      </footer>
    </div>
  );
}

export default HomePage;
