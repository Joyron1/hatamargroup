import { Action } from '@ngrx/store'
import { Product } from '../Models/cart.model';
import * as CartActions from '../actions/cart.actions';

// Section 1
const initialState: Product = {
    name: null,
    qnt: null,
    price: null,
    totalPrice: null
}

// Section 2
export function reducer(state: Product[] = [initialState], action: CartActions.Actions) {

    // Section 3
    switch (action.type) {

        case CartActions.ADD_PRODUCT:
            // console.log(action.payload);
            return [...state, action.payload];

        case CartActions.REMOVE_PRODUCT:
            // console.log(action.payload);
            return [...state, action.payload];

        default:
            return state;

    }
}