import { useContext } from "react";
import { GlobalContext } from "../../components/context";
import RecipeItem from "../../components/recipeItem";

export default function Home() {
    const { recipeList, loading } = useContext(GlobalContext);

    const queriesList = [
        "carrot", "broccoli", "asparagus", "cauliflower", "corn", "cucumber", "green pepper", "lettuce", "mushrooms", "onion", "potato", "pumpkin", "red pepper", "tomato", "beetroot", "brussel sprouts", "peas", "zucchini", "radish", "sweet potato", "artichoke", "leek", "cabbage", "celery", "chili", "garlic", "basil", "coriander", "parsley", "dill", "rosemary", "oregano", "cinnamon", "saffron", "green bean", "bean", "chickpea", "lentil", "apple", "apricot", "avocado", "banana", "blackberry", "blackcurrant", "blueberry", "boysenberry", "cherry", "coconut", "fig", "grape", "grapefruit", "kiwifruit", "lemon", "lime", "lychee", "mandarin", "mango", "melon", "nectarine", "orange", "papaya", "passion fruit", "peach", "pear", "pineapple", "plum", "pomegranate", "quince", "raspberry", "strawberry", "watermelon", "salad", "pizza", "pasta", "popcorn", "lobster", "steak", "bbq", "pudding", "hamburger", "pie", "cake", "sausage", "tacos", "kebab", "poutine", "seafood", "chips", "fries", "masala", "paella", "som tam", "chicken", "toast", "marzipan", "tofu", "ketchup", "hummus", "chili", "maple syrup", "parma ham", "fajitas", "champ", "lasagna", "poke", "chocolate", "croissant", "arepas", "bunny chow", "pierogi", "donuts", "rendang", "sushi", "ice cream", "duck", "curry", "beef", "goat", "lamb", "turkey", "pork", "fish", "crab", "bacon", "ham", "pepperoni", "salami", "ribs",

    ]

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
                    : <div className="lg:text-4xl text-xl text-center text-black font-extrabold">
                        <p>Available search queries</p>
                        <ul>
                            {
                                queriesList.map((element) => <li key={element}>{element}</li>)
                            }
                        </ul>
                    </div>
            }
        </div >
    );
}