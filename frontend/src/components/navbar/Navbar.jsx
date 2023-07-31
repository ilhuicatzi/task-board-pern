import { Link, useLocation } from "react-router-dom";
import { navigation } from "./navigation";

function Navbar() {
  const location = useLocation();
  return (
    <nav className="bg-zinc-950 flex justify-between px-10 py-4 items-center">
      <h1 className="text-2xl font-semibold">
        <Link to="/">PERN Tasks</Link>
      </h1>
      <ul className="flex gap-x-3 items-center">
        {navigation.map((item, index) => (
          <li 
          key={index} 
          className={`${location.pathname===item.path && "bg-sky-500 px-3 py-1 rounded-lg" }`}>
            <Link to={item.path}
            className="text-sm font-medium">{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
