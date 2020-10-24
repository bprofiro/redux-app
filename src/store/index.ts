import { createStore } from 'redux';

import rootReducer from './modules/rootReducer';
import { ICartState } from './modules/cart/type';

export interface IState {
  cart: ICartState;
}

const store = createStore(rootReducer);

export default store;