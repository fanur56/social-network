import axios from "axios";
import {ProfileType} from "features/Profile/profile-reducer";
import {LoginFormType} from "features/login/LoginReduxForm/LoginReduxForm";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers:{
        'API-KEY': '4dce9c29-5377-498a-a91c-b36486f686b7'
    }
})

export const usersAPI = {
    getUsers: (currentPage: number = 1, pageSize: number = 100) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
    }
}

export const followAPI = {
    postFollow: (userID: number) => {
        return instance.post(`follow/${userID}`)
    },
    deleteUnFollow: (userID: number) => {
        return instance.delete(`follow/${userID}`)
    }
}

export const profileAPI = {
    getProfile: (userID: string) => {
        return instance.get(`profile/${userID}`)
    },
    getStatus: (userID: string) => {
        return instance.get(`profile/status/${userID}`)
    },
    putStatus: (status: string) => {
        return instance.put('profile/status', {status})
    },
    savePhoto: (file: File) => {
        const formData = new FormData()
        formData.append('image', file)
        return instance.put('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile: (formData: ProfileType) => {
        return instance.put('profile', formData)
    }

}

export const authAPI = {
    getAuth: () => {
        return instance.get<MyDataType>(`auth/me`)
    },
    login: (formData: LoginFormType) => {
        return instance.post('auth/login', {...formData})
    },
    logout: () => {
        return instance.delete('auth/login')
    }
}

export const securityAPI = {
    getCaptcha: () => {
        return instance.get('security/get-captcha-url')
    }
}

export type MyDataType = {
	data: MeType,
	messages: string[];
	fieldsErrors: string[];
	resultCode: number;
}
export type MeType = {
	id: number;
	login: string;
	email: string;
}