// Section 1
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Product } from '../Models/cart.model';

// Section 2
export const ADD_PRODUCT = '[PRODUCT] Add';
export const REMOVE_PRODUCT = '[PRODUCT] Remove';

// Section 3
export class AddCart implements Action {
    readonly type = ADD_PRODUCT

    constructor(public payload: Product) { }
}

export class RemoveCart implements Action {
    readonly type = REMOVE_PRODUCT

    constructor(public payload: number) { }
}

// Section 4
export type Actions = AddCart | RemoveCart;