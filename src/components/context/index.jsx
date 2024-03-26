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
        fetchRecipes(searchParam);
    }

    function handleClick(ingredientName) {
        fetchRecipes(ingredientName);
    }

    async function fetchRecipes(ingredientName){
        setLoading(true);

        try {
            const response = await fetch(
                `https://forkify-api.herokuapp.com/api/v2/recipes?search=${ingredientName}`
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

    function handleAddToFavorite(currentElement) {

        // console.log(currentElement);

        let copyFavoritesList = Array.from(favoritesList);

        // check if element is already present in the favorite list
        const index = copyFavoritesList.findIndex((element) => element.id === currentElement.id)

        if (index === -1) {
            copyFavoritesList.push(currentElement)
        } else {
            copyFavoritesList.splice(index, 1)
        }

        setFavoritesList(copyFavoritesList)
    }

    // console.log(favoritesList, 'favoritesList');

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
                favoritesList,
                handleClick
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
}