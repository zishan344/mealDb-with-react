import React from "react";
import "./Meal.css";
const Meal = ({ meal }) => {
  console.log(meal.strMealThumb);
  const { strMeal, strMealThumb, strArea, strCategory } = meal;
  return (
    <div className="meal">
      <img src={strMealThumb} alt="" />
      <h5>Catagory: {strCategory}</h5>
      <h4>Name: {strMeal}</h4>
      <h5>Food Area: {strArea}</h5>
      <button>Add to cart</button>
    </div>
  );
};

export default Meal;
