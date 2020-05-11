import { SIGN_IN, SIGN_OUT, CREATE_STREAM, FETCH_STREAM, FETCH_STREAMS, EDIT_STREAM, DELETE_STREAM } from './types';
import { streams } from '../apis/streams'

export const sign_in = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    }
}

export const sign_out = () => {
    return {
        type: SIGN_OUT
    }
}

export const create_stream = formValues => async dispatch => {
    const response = await streams.post('/streams', formValues);
    dispatch({
        type: CREATE_STREAM,
        payload: response.data
    })
}

export const fetch_streams = () => async dispatch => {
    const response = await streams.get('/streams');
    dispatch({
        type: FETCH_STREAMS,
        payload: response.data
    })
}

export const fetch_stream = (id) => async dispatch => {
    const response = await streams.get(`/streams/${id}`);
    dispatch({
        type: FETCH_STREAM,
        payload: response.data
    })
}

export const edit_stream = (id, formValues) => async dispatch => {
    const response = await streams.put(`/streams/${id}`, formValues);
    dispatch({
        type: EDIT_STREAM,
        payload: response.data
    })
}


export const delete_stream = id => async dispatch => {
    await streams.put(`/streams/${id}`);
    dispatch({
        type: DELETE_STREAM,
        payload: id
    })
}
