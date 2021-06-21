//fake api
import axiosClient from "./axiosClient"

const userApi = {
    register(data){
        const url = '/RegisterCustomer';
        return axiosClient.post(url,data)
    },
    login(data){
        const url = '/Login';
        return axiosClient.post(url,data)
    }
}
export default userApi;