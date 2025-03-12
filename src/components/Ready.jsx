

export default function Ready({ ingredients, toggleRecipeShown }) {

    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ));

    return (
        <>
        {ingredients.length > 0 &&
                        <section>
                            <h2>Ingredients on hand:</h2>
        
                            <ul className="ingredients-list" aria-live="polite">{ingredientsListItems}</ul>
        
                            {ingredients.length >3 &&
                                <div className="get-recipe-container">
                                <div className="textos">
                                    <h3>Ready for a recipe?</h3>
                                    <p>Generate a recipe from your list of ingredients.</p>
                                </div>
        
                                <button onClick={toggleRecipeShown}>Get recipe</button>
                            </div>}
                        </section>
                    }
        </>
    )
}