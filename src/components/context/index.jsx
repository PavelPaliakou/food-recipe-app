import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({children}) {
    const [loading, setLoading] = useState(false);
    const [recipeList, setRecipeList] = useState([]);
}