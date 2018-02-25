import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.css'
const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Meat', type: 'meat' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' }
];
const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p> Current Price : <strong>{props.price.toFixed(2)}$ </strong></p>
        {
            controls.map(ctrl => (
                <BuildControl
                    key={ctrl.label}
                    added={() => props.ingredientAdded(ctrl.type)}
                    removed={() => props.ingredientRemoved(ctrl.type)}
                    label={ctrl.label}
                    disabled={props.disabled[ctrl.type]}
                />

            ))}
        <button
        disabled = {! props.purchasable}
         className={classes.OrderButton}
         onClick= {props.orderd}
         >Order Now</button>
    </div>
);

export default buildControls;