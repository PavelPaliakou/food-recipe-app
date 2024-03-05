import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="container flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between items-center py-8 mx-auto ">
            <NavLink
                to={"/favorites"}
                className="text-black hover:text-gray-700 duration-300">
                Food Recipe
            </NavLink>
            <form>
                <input type="text"
                    name="search"
                    placeholder="Enter dish name"
                    className="bg-white/75 py-3 px-8 rounded-full outline-none lg:*:w-96 shadow-lg shadow-red-100 focus:shadow-red-200"
                />
            </form>
            <ul className="flex gap-5">
                <li>
                    <NavLink
                        to={"/"}
                        className="text-black hover:text-gray-700 duration-300">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={"/favorites"}
                        className="text-black hover:text-gray-700 duration-300">
                        Favorites
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}