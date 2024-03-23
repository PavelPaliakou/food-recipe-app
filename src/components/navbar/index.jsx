import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../context";

export default function Navbar() {

    const { searchParam, setSearchParam, handleSubmit } = useContext(GlobalContext);

    return (
        <nav className="container flex flex-col lg:flex-row gap-5 lg:gap-0 lg:px-8 justify-between items-center py-8 mx-auto ">
            <NavLink
                to={"/favorites"}
                className="text-black hover:text-gray-700 duration-300">
                Food Recipe
            </NavLink>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="search"
                    value={searchParam}
                    onChange={(e) => setSearchParam(e.target.value)}
                    placeholder="Enter dish name"
                    className="py-3 px-8 rounded-full border border-gray-300 outline-none lg:*:w-96 shadow-lg shadow-gray-200 focus:shadow-gray-400"/>
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