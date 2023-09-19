import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav>
        <div className="navbar bg-base-100 flex justify-between">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  <a></a>
                </li>
                <li>
                  <a>Cart</a>
                </li>
              </ul>
            </div>
            <a className="btn btn-ghost normal-case text-xl">Amader Hotel</a>
          </div>
          <div className="hidden lg:flex">
            <ul className="flex gap-2 px-1 font-medium">
              <NavLink
                to={`/home`}
                className={({ isActive, isPending }) =>
                  isActive
                    ? "bg-primaryColor text-basicColor py-2 px-3 rounded-md hover:bg-basicColor hover:text-primaryColor duration-500"
                    : isPending
                    ? "pending"
                    : "hover:bg-primaryColor hover:text-basicColor py-2 px-3 rounded-md text-primaryColor duration-500"
                }>
                <button>Home</button>
              </NavLink>
              <NavLink
                to={`/catagories`}
                className={({ isActive, isPending }) =>
                  isActive
                    ? "bg-primaryColor text-basicColor py-2 px-3 rounded-md hover:bg-basicColor hover:text-primaryColor duration-500"
                    : isPending
                    ? "pending"
                    : "hover:bg-primaryColor hover:text-basicColor py-2 px-3 rounded-md text-primaryColor duration-500"
                }>
                <button>Catagories</button>
              </NavLink>
              <NavLink
                to={`/cart`}
                className={({ isActive, isPending }) =>
                  isActive
                    ? "bg-primaryColor text-basicColor py-2 px-3 rounded-md hover:bg-basicColor hover:text-primaryColor duration-500"
                    : isPending
                    ? "pending"
                    : "hover:bg-primaryColor hover:text-basicColor py-2 px-3 rounded-md text-primaryColor duration-500"
                }>
                <button>Cart</button>
              </NavLink>
              <NavLink
                to={`/login`}
                className={({ isActive, isPending }) =>
                  isActive
                    ? "bg-primaryColor text-basicColor py-2 px-3 rounded-md hover:bg-basicColor hover:text-primaryColor duration-500"
                    : isPending
                    ? "pending"
                    : "hover:bg-primaryColor hover:text-basicColor py-2 px-3 rounded-md text-primaryColor duration-500"
                }>
                <button>LogIn</button>
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
