import Link from 'next/link'
import classes from './page.module.css'
import Mealsgrid from '@/components/meals/meals-grid'

import { getMeals } from '@/lib/meals'

export default async function MealsPage() {
const meals = await getMeals();
console.log(meals+" meals..........");
  return (
   <>
   <header className={classes.header}>
    <h1>Delicious Meals created {' '}
      <span className={classes.highlight}>by you</span>
    </h1>
    <p>Chooose your fav recipe and cook yourself</p>

    <p className={classes.cta}>
      <Link href = '/meals/share'> Share your favourite recipe</Link>
    </p>
   </header>
   <main>
    <Mealsgrid meals={meals}/>
   </main>
   </>
  )
}


