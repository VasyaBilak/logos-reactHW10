import { PostServices } from "../../services/apiServices";

export const userActionTypes = {
    SET_ALBUMS: 'SET_ALBUMS',
    SET_TODOS: 'SET_TODOS',
    SET_COMMENTS: 'SET_COMMENTS',
}

export const userActions = {
    setAlbums: (albums) => ({type: userActionTypes.SET_ALBUMS, payload: albums}),
    setTodos: (todos) => ({type: userActionTypes.SET_TODOS, payload: todos}),
    setComments: (comments) => ({type: userActionTypes.SET_COMMENTS, payload: comments}),
}

export const getAlbumsThunk = () => (dispatch) => {
    PostServices.getAlbums(dispatch);
}

export const getCommentsThunk = () => (dispatch) => {
    PostServices.getComments(dispatch);
}

export const getTodosThunk = () => (dispatch) => {
    PostServices.getTodos(dispatch);
}
