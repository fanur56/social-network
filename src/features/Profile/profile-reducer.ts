import {v1} from "uuid";
import {Dispatch} from "redux";
import {profileAPI} from "api/api";
import {AddPostFormType} from "./MyPosts/addPostForm/AddPostForm";
import {AppStateType} from "app/redux-store";
import {stopSubmit} from "redux-form";
import {setAppStatusAC} from "app/app-reducer";

const initialState: ProfilePageType = {
    posts: [
        {
            id: v1(),
            message: 'Post functionality is still under development. Some features may be unavailable. An online platform that is used for communication, dating, creating social relationships between people who have similar interests or offline connections, as well as for entertainment (music, movies) and work.',
            likes: 8
        },
        {
            id: v1(),
            message: 'Programming is the process of creating computer programs. In the words of one of the founders of programming languages, Niklaus Wirth, "Programs = algorithms + data structures."',
            likes: 24
        },
        {
            id: v1(),
            message: 'Web programming is a section of programming focused on the development of web applications (programs that ensure the functioning of dynamic World Wide Web sites). Web programming languages are languages that are primarily designed to work with web technologies. Web programming languages can be roughly divided into two overlapping groups: client-side and server-side.',
            likes: 56
        },
        {
            id: v1(),
            message: 'React can be used to develop single page and mobile applications. Its goal is to provide high development speed, simplicity and scalability. As a library for developing user interfaces, React is often used with other libraries such as MobX, Redux, and GraphQL.',
            likes: 34
        },
        {
            id: v1(),
            message: 'TypeScript is a programming language introduced by Microsoft in 2012 and positioned as a web application development tool that extends the capabilities of JavaScript. The developer of the TypeScript language is Anders Hejlsberg, who previously created Turbo Pascal, Delphi, and C#.',
            likes: 18
        },
    ],
    profile: null,
    status: ''
}

export const profileReducer = (state: ProfilePageType = initialState, action: ProfileActionType): ProfilePageType => {
    switch (action.type) {
        case 'PROFILE/ADD-POST':
            return {
                ...state,
                posts: [{id: v1(), message: action.formData.newPostText, likes: 0}, ...state.posts]
            };
        case 'PROFILE/SET-USER-PROFILE':
            return {
                ...state,
                profile: action.profile
            };
        case 'PROFILE/SET-USER-STATUS':
            return {
                ...state,
                status: action.status
            };
        case "PROFILE/DELETE-POST":
            return {
                ...state,
                posts: state.posts.filter(el => el.id !== action.id)
            }
        case "PROFILE/SAVE-PHOTO-SUCCESS":
            // @ts-ignore
            return {...state, profile: {...state.profile, photos: action.data}}
        default :
            return state;
    }
}

// actions
export const addPostAC = (formData: AddPostFormType) => ({type: 'PROFILE/ADD-POST', formData} as const)

export const setUserProfileAC = (profile: ProfileType) => ({type: 'PROFILE/SET-USER-PROFILE', profile} as const)

export const setUserStatusAC = (status: string) => ({type: 'PROFILE/SET-USER-STATUS', status} as const)

export const deletePostAC = (id: string) => ({type: 'PROFILE/DELETE-POST', id} as const)

export const savePhotoSuccessAC = (data: PhotosType) => ({type: 'PROFILE/SAVE-PHOTO-SUCCESS', data} as const)

// thunks
export const getUserProfileTC = (userID: string): any => async (dispatch: Dispatch) => {
    dispatch(setAppStatusAC("loading"))
    try {
        const res = await profileAPI.getProfile(userID)
        dispatch(setUserProfileAC(res.data))
    } catch (err) {
        console.log(err)
    } finally {
        dispatch(setAppStatusAC("idle"))
    }
}


export const getUserStatusTC = (userID: string): any => async (dispatch: Dispatch) => {
    dispatch(setAppStatusAC("loading"))
    profileAPI.getStatus(userID)
        .then(res => {
            dispatch(setUserStatusAC(res.data))
        })
        .catch(err => {
            console.log(err)
        })
        .finally(() => {
            dispatch(setAppStatusAC("idle"))
        })
}

export const updateStatusTC = (status: string): any => async (dispatch: Dispatch) => {
    dispatch(setAppStatusAC("loading"))
    profileAPI.putStatus(status)
        .then(() => {
            dispatch(setUserStatusAC(status))
        })
        .catch(rej => {
            console.error(rej.data.messages)
        })
        .finally(() => {
            dispatch(setAppStatusAC("idle"))
        })
}

export const savePhotoTC = (file: File): any => async (dispatch: Dispatch, getState: () => AppStateType) => {
    dispatch(setAppStatusAC("loading"))
    const userId = getState().auth.id + ''
    try {
        const res = await profileAPI.savePhoto(file)
        if (res.data.resultCode === 0) {
            dispatch(getUserProfileTC(userId))
        }
    } catch (err) {
        console.error(err)
    } finally {
        dispatch(setAppStatusAC("idle"))
    }
}

export const saveProfileTC = (formData: ProfileType): any => async (dispatch: Dispatch, getState: () => AppStateType) => {
    dispatch(setAppStatusAC("loading"))
    const userId = getState().auth.id + ''
    try {
        const res = await profileAPI.saveProfile(formData)
        if (res.data.resultCode === 0) {
            dispatch(getUserProfileTC(userId))
        } else {
            const action: any = stopSubmit('profileData', {_error: res.data.messages[0]})
            dispatch(action)
            return Promise.reject(res.data.messages[0])
        }
    } catch (err) {
        console.error(err)
    } finally {
        dispatch(setAppStatusAC("idle"))
    }
}

// types
export type PostsType = {
    id: string,
    message: string,
    likes: number
}

export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

type PhotosType = {
    small: string | null
    large: string | null
}

export type ProfileType = {
    aboutMe: string
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
}

export type ProfilePageType = {
    posts: Array<PostsType>
    profile: ProfileType | null
    status: string
}

export type ProfileActionType =
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof setUserProfileAC>
    | ReturnType<typeof setUserStatusAC>
    | ReturnType<typeof deletePostAC>
    | ReturnType<typeof savePhotoSuccessAC>