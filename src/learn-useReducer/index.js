import React, { useReducer } from "react";
import { ACTION_TYPE } from "./actionType";
import { INITIAL_STATE, postReducer } from "./fetchData";
import './index.css';

const Index = () => {
    const [state, dispatch] = useReducer(postReducer, INITIAL_STATE);

    const handlerFetch = () => {
        dispatch({ type: ACTION_TYPE.FETCHT_START })
        fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            dispatch({ type: ACTION_TYPE.FETCHT_SUCCESS, payload: data })
        })
        .catch((err) => {
            dispatch({ type: ACTION_TYPE.FETCHT_ERROR })
        })
    }

    return (
        <div className="Main">
            <button className="Button" onClick={handlerFetch}>
                {state.loading ? 'Wait...' : 'Get Post'}
            </button>
            <p  className="Text">{state.post?.title}</p>
            <span className="Error">{state.error && 'Terjadi kesalahan'}</span>
        </div>
    )
}

export default Index;