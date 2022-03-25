import React, { useEffect, useState } from "react";

const Meals = () => {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s")
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, []);
  return (
    <div>
      <h1>meals</h1>
    </div>
  );
};

export default Meals;
