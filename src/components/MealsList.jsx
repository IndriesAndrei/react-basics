import { useMealsListContext } from "../providers/MealsProvider"

export default function MealsList() {
    // using the context to get data we want
    const {meals} = useMealsListContext();

    return (
        <div>
            <h1>Meals List using Context API</h1>
            {meals.map((meal, index) => (
                <h2 key={index}>{meal}</h2>
            ))}
        </div>
    )
}
