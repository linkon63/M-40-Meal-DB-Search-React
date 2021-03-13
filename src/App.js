import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import MealFinder from './components/MealFinder/MealFinder';

function App() {
  const [meal , setMeal] = useState({});
  useEffect(()=>{
    console.log('API Calling')
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772`;
    fetch(url)
    .then(response => response.json())
    .then(data => setMeal(data?.meals?.[0]))
  },[]);
  console.log(meal);
  return (
    <div className="App">
      <h1>Hello React </h1>
      <h4>Name : {meal?.strMeal}</h4>
      <MealFinder></MealFinder>
    </div>
  );
}

export default App;
