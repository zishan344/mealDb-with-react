import React, { useEffect, useState } from "react";
import Meal from "../Meal/Meal";
import "./Meals.css";

const Meals = () => {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s")
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, []);
  return (
    <div className="meal-container">
      <div className="meal-cart">
        {meals.map((meal) => (
          <Meal meal={meal} key={meal.idMeal}></Meal>
        ))}
      </div>
      <div>
        <div className="selectedMeal">
          <h3>Total order </h3>
        </div>
      </div>
    </div>
  );
};

export default Meals;
