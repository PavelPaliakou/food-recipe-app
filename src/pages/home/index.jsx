import { useContext } from "react";
import { GlobalContext } from "../../components/context";
import RecipeItem from "../../components/recipeItem";

export default function Home() {

    const { recipeList, loading } = useContext(GlobalContext);

    if (loading) {
        return <p>Loading...</p>
    }

    return (
        <div className="container py-8 mx-auto flex flex-wrap justify-center gap-10">
            {
                recipeList && recipeList.length > 0
                    ? recipeList.map((element) =>
                        <RecipeItem
                            key={element.id}
                            data={element}
                        />)
                    : <div className="lg:text-4xl text-xl text-center text-black font-extrabold">
                        <p>No recipes found. Please try again</p>
                    </div>
            }
        </div>
    );
}