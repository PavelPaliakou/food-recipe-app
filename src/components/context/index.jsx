import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
    const [searchParam, setSearchParam] = useState("");
    const [loading, setLoading] = useState(false);
    const [recipeList, setRecipeList] = useState([]);
    const [recipeDetailsData, setRecipeDetailsData] = useState(null);
    const [favoritesList, setFavoritesList] = useState([])

    const navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();
        setLoading(true);

        try {
            const response = await fetch(
                `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
            );

            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }

            const data = await response.json();

            if (data?.data?.recipes) {
                setRecipeList(data?.data?.recipes);
                setLoading(false);
                setSearchParam("");
                navigate('/')
            }

        } catch (e) {
            console.log(e);
            setLoading(false);
            setSearchParam("");
        }
    }

    function handleAddToFavorite(currentIndex) {

        console.log(currentIndex);

        let copyFavoritesList = Array.from(favoritesList);

        const index = copyFavoritesList.findIndex((element) => element.id === currentIndex.id)

        if (index === -1) {
            copyFavoritesList.push(currentIndex)
        } else {
            copyFavoritesList.splice(index)
        }

        setFavoritesList(copyFavoritesList)
    }

    console.log(favoritesList, 'favoritesList');

    return (
        <GlobalContext.Provider
            value={{
                searchParam,
                loading,
                recipeList,
                setSearchParam,
                handleSubmit,
                recipeDetailsData,
                setRecipeDetailsData,
                handleAddToFavorite,
                favoritesList
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
}