import { Link, useLocation } from "react-router-dom";
import { navigationPublic, navigationPrivate } from "./navigation";
import { useAuth } from "../../context/AuthContext";
import { MdExitToApp } from "react-icons/md";
import { twMerge } from "tailwind-merge";

function Navbar() {
  const location = useLocation();
  const { isAuthenticated, signout } = useAuth();
  return (
    <nav className="bg-zinc-950 flex justify-between px-2 sm:px-10 py-4 items-center">
      <h1 className="text-2xl font-semibold">
        <Link to="/">
          <span className="text-sky-500">Task</span>
          <span className="hidden md:inline-block text-stone-300">Board</span>
        </Link>
      </h1>
      <ul className="flex gap-x-3 items-center">
        {isAuthenticated ? (
          <>
            {navigationPrivate.map((item, index) => (
              <li key={index}>
                <Link
                  className={twMerge(
                    "flex items-center border-2 px-3 py-0.5 rounded-lg border-transparent hover:text-stone-300 text-white",
                    location.pathname === item.path && "bg-sky-600"
                  )}
                  to={item?.path}
                >
                  {item?.icon} 
                  <span className="hidden sm:block ml-1 text-sm">{item?.name}</span>
                </Link>
              </li>
            ))}

            <li
              className="py-1.5 px-3 bg-slate-800 hover:bg-red-950 rounded-lg text-xl font-medium"
              onClick={() => {
                if(window.confirm("Do you want to sign out?")) {
                  signout()
                }
              }}
            >
              <Link className="flex ">
                <MdExitToApp className="flex" />
                <span>
                  <span className="hidden md:block ml-1 text-sm">Sign out</span>
                </span>
              </Link>
            </li>
          </>
        ) : (
          navigationPublic.map((item, index) => (
            <li
              key={index}
              className={twMerge(
                "flex items-center border-2 px-2 py-0.5 rounded-lg border-transparent hover:text-stone-300 text-white",
                location.pathname === item.path && "bg-sky-600"
              )}
            >
              <Link to={item?.path} className="text-sm font-medium">
                {item?.name}
              </Link>
            </li>
          ))
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
