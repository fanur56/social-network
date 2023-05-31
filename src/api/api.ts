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
        return instance.post(`follow/${id}`).then(response => response.data.resultCode)
    },
    unfollow(id: number) {
        return instance.delete(`follow/${id}`).then(response => response.data.resultCode)
    },
    getProfile(userID: number) {
        console.warn("Obsolete method. Please, use profileAPI")
        return profileAPI.getProfile(userID)
    }
}

export const profileAPI = {
    getProfile(userID: number) {
        return instance.get(`profile/` + userID)
    },
    getStatus(userID:number) {
        return instance.get(`profile/status/` + userID)
    },
    updateStatus(status:string){
        return instance.put(`profile/status`, {status})
    }
}

export const authAPI = {
    me() {
        return instance.get("auth/me")
    },
    login(email: string, password: string, rememberMe = false) {
        return instance.post("auth/login", {email, password, rememberMe})
    },
    logout() {
        return instance.delete("auth/login")
    }
}