import {createStore} from 'redux'
import {tokenReducer} from "./tokens/tokensReducer.ts";

const store = createStore(tokenReducer)

export default store;