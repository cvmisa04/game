import { GET_ALL_NUMBERS, GET_SELECT_NUMBERS } from "../constans/getNumber";

const brojevi=[
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
        16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
        31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45,
        46, 47, 48
]
export const getAllNumber =(state=brojevi,action)=>{
    switch(action.type){
        case GET_ALL_NUMBERS:
            return{
                ...state,
                brojevi:action.payload
                
            }
            default: return state
    }
}

export const getSelectedNumber = (state=[],action)=>{
    switch(action.type){
        case GET_SELECT_NUMBERS:
            return{
                ...state,
                state:action.payload
            }
        default: return state
    }
}