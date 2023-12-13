import { useMealsListContext } from "../providers/MealsProvider"

export default function Counter() {
    // get data from context API
    const {meals} = useMealsListContext();

    return (
        <div>
            <h3>Number of meals today: {meals.length}</h3>
        </div>
    )
}
