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

export const useMealsListContext = () => React.useContext(MealsContext);

export default MealsProvider;