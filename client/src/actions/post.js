import axios from 'axios';
import { setAlert } from './alert';
import { GET_POSTS, POST_ERROR, UPDATE_LIKES, DELETE_POST, ADD_POST, GET_POST, ADD_COMMENT, DELETE_COMMENT } from './types';

// Get posts
export const getPosts = () => async dispatch => {
    try {
        const res = await axios.get('/api/posts');

        dispatch({
            type: GET_POSTS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });        
    }
};

// Add like
export const addLike = (postID) => async dispatch => {
    try {
        const res = await axios.put(`/api/posts/like/${postID}`);

        dispatch({
            type: UPDATE_LIKES,
            payload: { postID, likes: res.data }
        });
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });        
    }
};

// Remove like
export const removeLike = (postID) => async dispatch => {
    try {
        const res = await axios.put(`/api/posts/unlike/${postID}`);

        dispatch({
            type: UPDATE_LIKES,
            payload: { postID, likes: res.data }
        });
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });        
    }
};

// Delete Post
export const deletePost = (postID) => async dispatch => {
    try {
        await axios.delete(`/api/posts/${postID}`);

        dispatch({
            type: DELETE_POST,
            payload: postID
        });
        dispatch(setAlert('Post Removed', 'success', 2000));
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });        
    }
};

// Add Post
export const addPost = (formData) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try {
        const res = await axios.post(`/api/posts`, formData, config);

        dispatch({
            type: ADD_POST,
            payload: res.data
        });
        dispatch(setAlert('Post Created', 'success', 2000));
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });        
    }
};

// Get a post
export const getPost = (postID) => async dispatch => {
    try {
        const res = await axios.get(`/api/posts/${postID}`);

        dispatch({
            type: GET_POST,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });        
    }
};

// Add Comment
export const addComment = (postID, formData) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    try {
        const res = await axios.post(`/api/posts/comment/${postID}`, formData, config);

        dispatch({
            type: ADD_COMMENT,
            payload: res.data
        });
        dispatch(setAlert('Comment Added', 'success', 2000));
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });        
    }
};

// Delete Comment
export const deleteComment = (postID, commentID) => async dispatch => {
    try {
        await axios.delete(`/api/posts/comment/${postID}/${commentID}`);

        dispatch({
            type: DELETE_COMMENT,
            payload: commentID
        });
        dispatch(setAlert('Comment Removed', 'success', 2000));
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });        
    }
};