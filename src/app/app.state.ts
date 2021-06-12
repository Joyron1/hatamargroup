import { Product } from './Models/cart.model';

export interface AppState {
    readonly cart: Product[];
}