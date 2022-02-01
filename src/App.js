import React, {useEffect, useState } from 'react';
import './App.css';
import RecetteList from './components/recetteList';

const App = () => {

  const APPLICATION_ID = 'b3fbe88e';
  const APPLICATION_KEY = '76a498de1ada678ba435327a0088c9da';
  const [recette, setRecette] = useState([]);
  const [request, setRequest] = useState("fish");
  const [recherche, setRecherche] = useState("");

  const updateRecherche = (e) =>{
    setRecherche(e.target.value);
  };

  const getRecherche = (e) =>{
    e.preventDefault();
    setRequest(recherche);
    setRecherche("");
  }

  useEffect(() => {
    getRecette();
  }, [request]);

  const getRecette = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${request}&app_id=${APPLICATION_ID}&app_key=${APPLICATION_KEY}`);
    const data = await response.json();
    console.log(data.hits);
    setRecette(data.hits);
    console.log("recette", recette);
  };


  return (
    <div className='App'>
      <form className='search-form' onSubmit={getRecherche}>
        <input
          className='search-bar'
          type= "text"
          value={recherche}
          onChange={updateRecherche} 
        />
        <button className='search-button' type="submit">Rechercher</button>
      </form>
      <div className='recette'>
        {recette.map(recetteList => (
        <RecetteList
          key={recetteList.recipe.label}
          title={recetteList.recipe.label}
          calories={recetteList.recipe.calories}
          image={recetteList.recipe.image}
          ingredients={recetteList.recipe.ingredients}

        />
        ))}
      </div>
    </div>
  );
}

export default App;
