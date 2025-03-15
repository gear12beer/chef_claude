import React from "react"

function Main() {
    const [ingredients, setIngredients] = React.useState([])
    
    const ingredientsList = ingredients.map(
        ingredient => (
            <li key={ingredient}>{ingredient}</li>
        )
    )

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(
            prevIngredients => [
                ...prevIngredients, 
                newIngredient
            ]
        )
    }

    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano" 
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            <ul>
                {ingredientsList}
            </ul>
        </main>
    )
}

export default Main;