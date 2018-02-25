import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
const INGREDIENT_PRICES = {
    salad: 0.05,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7

}
class BugerBuilder extends Component {
    // constructor (){
    //     super(props);
    //     this.state = {}
    // }
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false

    }
    purchasHandler = () => {
        this.setState({ purchasing: true });
    }
    updatePurchaseState = (ingredients) => {

        const sum = Object.keys(ingredients)
            .map(igkey => {
                return ingredients[igkey];
            }).reduce((
                (sum, el) => {
                    return sum + el

                }

            ), 0);
        this.setState({ purchasable: sum > 0 });

    }
    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const UpdatedCount = oldCount + 1;
        const UpdatedIngredients = {
            ...this.state.ingredients
        }
        UpdatedIngredients[type] = UpdatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        this.setState({
            totalPrice: newPrice,
            ingredients: UpdatedIngredients

        });
        this.updatePurchaseState(UpdatedIngredients);

    }
    IngredientremovedHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;

        }
        const UpdatedCount = oldCount - 1;
        const UpdatedIngredients = {
            ...this.state.ingredients
        }
        UpdatedIngredients[type] = UpdatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;

        this.setState({
            totalPrice: newPrice,
            ingredients: UpdatedIngredients

        });
        this.updatePurchaseState(UpdatedIngredients);


    }
    purchaseCancelHandler = () => {

        this.setState({ purchasing: false });
    }
    purchaseContinueHandler = () =>{
      alert('you contine');
    }
    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;


        }
        return (
            <Aux>
                <Modal modalClosed={this.purchaseCancelHandler} show={this.state.purchasing}>
                    <OrderSummary  
                    price = {this.state.totalPrice}
                    purchaseCancelled = {this.purchaseCancelHandler}
                    purchaseContinued = {this.purchaseContinueHandler}
                    ingredients={this.state.ingredients} />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    price={this.state.totalPrice}
                    disabled={disabledInfo}
                    orderd={this.purchasHandler}
                    purchasable={this.state.purchasable}
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.IngredientremovedHandler}
                />
            </Aux>

        );
    }
}

export default BugerBuilder;