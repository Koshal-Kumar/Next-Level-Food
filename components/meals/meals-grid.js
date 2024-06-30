import MealItem from './meal-item'
import classes from './meals-grid.module.css'

export default function Mealsgrid({meals}){

    if (!meals) {
        return <p>No meals available</p>;
    }

    return (
        <ul className={classes.meals}>
            {
                meals.map(meal => (
                    <li key={meal.id}>
                        <MealItem  {...meal}/>
                    </li>
                ))
            }
        </ul>
    )
}