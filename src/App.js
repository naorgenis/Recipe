import { useEffect, useState } from "react";
import Form from "./component/Form";
import Recipe from "./component/Recipe";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

const App = () => {
  const API_KEY = "7eaad22ab1329b6a526f3ddffafa214d";
  const API_ID = "1be174c8";
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipe();
  }, [query]);

  const getRecipe = async () => {
    const res = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`
    );
    const data = await res.json();
    setRecipes(data.hits);
    console.log(recipes);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="App">
      <Form search={search} updateSearch={updateSearch} getSearch={getSearch} />
      <div className="container">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            digest={recipe.recipe.digest}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
