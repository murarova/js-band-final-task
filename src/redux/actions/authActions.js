import * as notify from '../../utils/notification';
import { url } from '../../utils/entyPoints';

export const authTypes = {
    AUTH_REQUEST: 'auth/AUTH_REQUEST',
    LOGIN_SUCCESS: 'auth/LOGIN_SUCCESS',
    LOGIN_ERROR: 'auth/LOGIN_ERROR',
    LOGOUT: 'auth/USER_LOGOUT',
};

// ================ actions ===============================

export const loginSuccess = payload => ({
    type: authTypes.LOGIN_SUCCESS,
    payload,
});

export const loginError = error => ({
    type: authTypes.LOGIN_ERROR,
    payload: error.message,
});

export const logoutSuccess = () => ({
    type: authTypes.LOGOUT,
});

// ==========  operations =================================

export const authRequest = credential => ({
    type: authTypes.AUTH_REQUEST,
    payload: {
        request: {
            method: 'POST',
            url: url.loginUser(),
            data: credential,
        },
        options: {
            onSuccess({ dispatch, response }) {
                dispatch(loginSuccess(response.data));
            },
            onError({ dispatch, error }) {
                notify.error('Wrong username');
                dispatch(loginError(error));
            },
        },
    },
});

export const logout = () => dispatch => {
    dispatch(logoutSuccess());
};
