import {INCREMENT,DECREMENT} from'./action';

const initalState = {
    count: 0
}

export function reducer(state = initalState, action) {
    switch(action.type){
        case INCREMENT:
            return {
                count: state.count + 1
            };
        case DECREMENT:
            return {
                ount: state.count - 1 
                };
        default:
            return state;
    }
}