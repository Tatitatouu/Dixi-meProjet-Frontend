import axios from "axios";

export const GET_POSTS = "GET_POSTS";

export const getPosts = () => {
    return (dispatch) => {
        return axios.get("https://localhost:3001/posts").then((res) => {
            console.log(res);
        });
    };
};