import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const error = message => {
    return toast.error(message, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 5000,
    });
};

export const success = message => {
    return toast.success(message, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 5000,
    });
};

export const info = message => {
    return toast.info(message, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 5000,
    });
};

export const warn = message => {
    return toast.warn(message, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 5000,
    });
};
