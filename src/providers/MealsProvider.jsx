import React from "react";

// create the context
const MealsContext = React.createContext();

const todaysMeals = ['Baked Beans', 'Baked Sweet Potatoes', 'Bananas'];

// context provider
const MealsProvider = ({children}) => {
    const [meals, setMealsList] = React.useState(todaysMeals);

    return (
        <MealsContext.Provider value={{meals}}>
            {children}
        </MealsContext.Provider>
    )
}

// components to wire to the context (custom hook here)
export const useMealsListContext = () => React.useContext(MealsContext);

export default MealsProvider;