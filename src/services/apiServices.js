import axios from "axios";
import { userActions } from "../redux/action/postsAction";

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',  
});

export const PostServices = {
    getAlbums: async (dispatch) => {
        try {
            let response = await instance.get('albums');
            dispatch(userActions.setAlbums(response.data));
        } catch {}
    },
    getTodos: async (dispatch) => {
        try {
            let response = await instance.get('todos');
            dispatch(userActions.setTodos(response.data));
        } catch {}
    },
    getComments: async (dispatch) => {
        try {
            let response = await instance.get('comments');
            dispatch(userActions.setComments(response.data));
        } catch {}
    }
}