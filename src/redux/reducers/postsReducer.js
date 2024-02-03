import { userActionTypes } from "../action/postsAction"

const initialState = {
    albums: [],
    todos: [],
    comments: [],
}

const postsReducer = (state=initialState, action) => {
    switch(action.type) {
        case userActionTypes.SET_ALBUMS:
            return {
                ...state, 
                albums: action.payload
            }
        case userActionTypes.SET_TODOS:
            return {
                ...state, 
                todos: action.payload
            }
        case userActionTypes.SET_COMMENTS:
            return {
                ...state, 
                comments: action.payload
            }
        default:
            return state
    }
}

export default postsReducer;