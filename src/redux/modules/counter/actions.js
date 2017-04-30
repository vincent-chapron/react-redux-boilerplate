import {INCREMENT, DECREMENT} from './constantes';

export function increment() {
    return {type: INCREMENT}
}

export function decrement() {
    return {type: DECREMENT}
}
