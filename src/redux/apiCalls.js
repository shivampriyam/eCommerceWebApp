import { loginFailure, loginStart, loginSuccess } from './userRedux'
import axios from 'axios'

export const login = async (dispatch, user) =>{
    dispatch(loginStart());
    try {
        const res = await axios.post('https://mysterious-harbor-84596.herokuapp.com/api/auth/login', user );
        dispatch(loginSuccess(res.data));
    } catch (err) {
        dispatch(loginFailure());
    }
}