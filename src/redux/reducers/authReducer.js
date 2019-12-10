import { authTypes } from '../actions/authActions';

const initailState = {
    username: null,
    token: null,
    error: null,
};

const authReducer = (state = initailState, { type, payload }) => {
    switch (type) {
        case authTypes.LOGIN_SUCCESS:
            return { ...payload, error: null };

        case authTypes.LOGIN_ERROR:
            return { ...initailState, error: payload };

        case authTypes.LOGOUT:
            return initailState;

        default:
            return state;
    }
};

export default authReducer;
