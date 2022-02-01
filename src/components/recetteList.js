import React from 'react';
import style from '../recetteList.css';


const RecetteList = ({title, ingredients, image, calories}) =>{

    return(
        <div className={style.recette}>
            <article>
                <h2>{title}</h2>
                {ingredients.map((ingredient) => {
                    console.log('ingredient',ingredient);
                    <li>{ingredient.text}</li>
                })}
                <p>Calories : {calories}</p>  
                <img className={style.image} src={image} alt=""/>
            </article>
        </div>
    )
}

export default RecetteList;
