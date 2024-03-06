import { useContext } from "react";
import { GlobalContext } from "../../components/context";
import RecipeItem from "../../components/recipeItem";

export default function Favorites() {

    const { favoritesList } = useContext(GlobalContext);

    return (
        <div className="container py-8 mx-auto flex flex-wrap justify-center gap-10">
            {
                favoritesList && favoritesList.length > 0
                    ? favoritesList.map((element) =>
                        <RecipeItem
                            key={element.id}
                            data={element}
                        />)
                    : <div className="lg:text-4xl text-xl text-center text-black font-extrabold">
                        <p>Nothing added to favorites</p>
                    </div>
            }
        </div>
    );
}