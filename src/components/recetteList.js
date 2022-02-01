import React from 'react';
import style from '../recetteList.module.css';


const RecetteList = ({title, ingredients, image, calories}) =>{

    return(
        <div className={style.recette}>
                <h2>{title}</h2>
                <ol>
                    {ingredients.map((ingredient) => (
                        <li>{ingredient.text}</li>
                    ))}
                </ol>
                <p>Calories : {calories}</p>  
                <img className={style.image} src={image} alt=""/>
        </div>
    )
}

export default RecetteList;
