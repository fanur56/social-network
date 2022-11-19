import axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow(id: number) {
        return instance.delete(`follow/${id}`).then(response => response.data.resultCode)
    },
    unfollow(id: number) {
        return instance.post(`follow/${id}`).then(response => response.data.resultCode)
    }
}