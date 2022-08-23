import { Fragment } from 'react';

// impor classes from './Meals.css';
import MealsSummary from './MealsSummary';
import AvailableMeals from './AvailableMeals';

const Meals = () => {

    return <Fragment>
        <MealsSummary />
        <AvailableMeals />
    </Fragment>
}

export default Meals;