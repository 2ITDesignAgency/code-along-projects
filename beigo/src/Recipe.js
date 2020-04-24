import React from "react";
import style from "./recipe.module.css";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1 className="recipes-title">{title}</h1>
      <img className="recipes-image" src={image} alt="" />
      <ol className="recipes-ingredient">
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p><strong>Calories:</strong> {calories}</p>
    </div>
  );
};

export default Recipe;
