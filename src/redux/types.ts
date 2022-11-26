export type SidebarType = {}

export type DialogType = {
    dialogData: Array<DialogDataType>
    messagesData: Array<MessagesDataType>
    newMessagesBody: string
}

export type DialogDataType = {
    id: number
    name: string
}

export type MessagesDataType = {
    id: number
    message: string
}

export type PostsType = {
    postsData: Array<PostsDataType>
    newPostText: string
    profile: any | null
}

export type PostsDataType = {
    id: number
    message: string
    likes: number
}

export type AddPostAT = {
    type: 'ADD-POST'
}

export type UpdateNewPostTextAT = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}

export type UpdateNewMessageBodyAT = {
    type: 'UPDATE-NEW-MESSAGE-BODY'
    body: string
}

export type SendMessageAT = {
    type: 'SEND-MESSAGE'
}

export type FollowAT = {
    type: 'FOLLOW'
    userID: number
}

export type UnfollowAT = {
    type: 'UNFOLLOW'
    userID: number
}

export type SetUsersAT = {
    type: "SET-USERS"
    users: Array<UserType>
}

export type SetCurrentPageAT = {
    type: "SET-CURRENT-PAGE"
    currentPage: number
}

export type SetTotalUsersCountAT = {
    type: "SET-TOTAL-USERS-COUNT"
    totalCount: number
}

export type ToggleIsFetchingAT = {
    type: "TOGGLE-IS-FETCHING"
    isFetching: boolean
}

export type setUserProfileAT = {
    type: "SET_USER_PROFILE"
    profile: any
}

export type toggleIsFollowingProgressAT = {
    type: "TOGGLE-IS-FOLLOWING-PROGRESS"
    isFetching: boolean
    userID: number
}

export type UserProfileType= {
    aboutMe: string
    contacts: UserProfileContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: UserProfilePhotosType
}

export type UserProfileContactsType = {
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
}

export type UserProfilePhotosType = {
    small: string
    large: string
}

export type UsersStateType = {
    users: Array<UserType>
}

export type UsersPageType = {
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<any>
}

export type UserType = {
    id: number
    photos: UserPhotosType
    followed: boolean
    name: string
    status: string
    location: UsersLocationType
}

export type UserPhotosType = {
    small: string | null
    large: string | null
}

export type UsersLocationType = {
    country: string,
    city: string
}

export type setAuthUserDataAT = {
    type: "SET_USER_DATA",
    data: {
        id: number,
        email: string,
        login: string
    }
}

export type DispatchActionType = (
    AddPostAT
    | UpdateNewPostTextAT
    | UpdateNewMessageBodyAT
    | SendMessageAT
    | FollowAT
    | UnfollowAT
    | SetUsersAT
    | SetCurrentPageAT
    | SetTotalUsersCountAT
    | ToggleIsFetchingAT
    | setUserProfileAT
    | toggleIsFollowingProgressAT
    | setAuthUserDataAT
    )