import { useState } from "react";
import Button from "./Button";
import Digest from "./Digest";
import Ingredients from "./Ingredients";
import "../App.css";

const Recipe = ({ title, calories, image, ingredients, digest }) => {
  const [showIngredients, setShowIngredients] = useState(false);
  const [showDigest, setShowDigest] = useState(false);

  const showIng = () => {
    setShowDigest(false);
    setShowIngredients(!showIngredients);
  };

  const showDig = () => {
    setShowIngredients(false);
    setShowDigest(!showDigest);
  };

  return (
    <div className="recipe">
      <h3> {title}</h3>
      <p> Calories: {Math.floor(Number(calories))}</p>
      <img className="image" src={image} alt="" style={{ cursor: "pointer" }} />
      <div className="buttons">
        <Button
          key={image + calories + title}
          text="Ingredients"
          onClick={showIng}
        />
        <Button key={image + calories} text="digest" onClick={showDig} />
      </div>

      {showIngredients ? <Ingredients ingredients={ingredients} /> : ""}
      {showDigest ? <Digest digets={digest} /> : ""}
    </div>
  );
};

export default Recipe;
