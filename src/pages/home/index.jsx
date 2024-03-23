import { useContext } from "react";
import { GlobalContext } from "../../components/context";
import RecipeItem from "../../components/recipeItem";
import queriesList from "../../data/queryList";
import { Link } from "react-router-dom";

export default function Home() {
    const { recipeList, loading, handleClick } = useContext(GlobalContext);

    if (loading) {
        return <p>Loading...</p>
    }

    return (
        <div className="container py-8 mx-auto flex flex-wrap justify-center gap-10">
            {
                recipeList?.length > 0
                    ? recipeList.map((element) =>
                        <RecipeItem
                            key={element.id}
                            data={element}
                        />)
                    : <div className="w-full text-center text-black">
                        <p className="lg:text-4xl text-xl font-extrabold mb-4">
                            Ingredients
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                            {
                                queriesList.map((element) =>
                                    <Link key={element}
                                        onClick={() => handleClick(element)}
                                    >
                                        {element}
                                    </Link>
                                )
                            }
                        </div>
                    </div>
            }
        </div >
    );
}