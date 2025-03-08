import React from "react"

function Main() {
    //const ingredients = ["Chicken","Oregano","Tomatoes"]
    const [ingredients, setIngredients] = React.useState([])
    
    const ingredientsList = ingredients.map(
        ingredient => (
            <li key={ingredient}>{ingredient}</li>
        )
    )

    function handleSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        setIngredients(
            prevIngredients => [
                ...prevIngredients, 
                newIngredient
            ]
        )
        event.currentTarget.reset()
        console.log(ingredients)
    }

    return (
        <main>
            <form onSubmit={handleSubmit} className="add-ingredient-form">
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