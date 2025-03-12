// form con action en lugar de onSubmit

import React from "react"
export default function Main() {


    const [ingredients, setIngredients] = React.useState([])

    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient");
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    return (
        <main>
            <form action={addIngredient} className="add-ing">
                <input 
                type="text" 
                placeholder="ej.:oregano" 
                aria-label="Agregar" 
                name="ingredient"
                />
                <button >+ Agregar</button>

                
            </form>

            <ul>
                {ingredientsListItems}
            </ul>
        </main>
    )
}

//---------------- complex state: arrays

// import React from "react"
// export default function Main() {


//     const [ingredients, setIngredients] = React.useState([])

//     const ingredientsListItems = ingredients.map(ingredient => (
//         <li key={ingredient}>{ingredient}</li>
//     ))

//     function handleClick(event) {
//         event.preventDefault()
//         const formData = new FormData(event.currentTarget)
//         const newIngredient = formData.get("ingredient");
//         setIngredients(prevIngredients => [...prevIngredients, newIngredient])
//         console.log(ingredientsListItems)
//     }

//     return (
//         <main>
//             <form onSubmit={handleClick} className="add-ing" action="">
//                 <input 
//                 type="text" 
//                 placeholder="ej.:oregano" 
//                 aria-label="Agregar" 
//                 name="ingredient"
//                 />
//                 <button >+ Agregar</button>

                
//             </form>

//             <ul>
//                 {ingredientsListItems}
//             </ul>
//         </main>
//     )
// }