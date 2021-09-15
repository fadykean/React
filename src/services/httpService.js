import axios from "axios";
import { toast } from "react-toastify";
import userService from "./userService";

axios.defaults.headers.common["x-auth-token"] = userService.getJwt();

axios.interceptors.response.use(null, error => {
    const expectedError = !!error.response?.status;
    expectedError && toast.error(`error ${error.response.statusText} ${error.response.status}`);
    return Promise.reject(error);
})

// eslint-disable-next-line
export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    patch: axios.patch,
    delete: axios.delete
};