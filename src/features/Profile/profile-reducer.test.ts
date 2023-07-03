import {
    addPostAC,
    deletePostAC,
    ProfilePageType,
    profileReducer,
    ProfileType,
    setUserProfileAC, setUserStatusAC
} from "./profile-reducer";

let state: ProfilePageType
let profile: ProfileType

beforeEach(() => {
    state = {
        posts: [
            {id: '1', message: 'Hello word', likes: 24},
            {id: '2', message: 'Yo! i`m props', likes: 56},
        ],
        profile: null,
        status: ''
    }
    profile = {
        aboutMe: 'Front-end developer',
        userId: 1,
        lookingForAJob: true,
        lookingForAJobDescription: 'good job',
        fullName: 'Vladimir',
        contacts: {
            github: '',
            facebook: '',
            instagram: '',
            mainLink: '',
            twitter: '',
            website: '',
            youtube: '',
            vk: ''
        },
        photos: {
            small: '',
            large: ''
        }
    }
})

test('add post', () => {
    const profileReducerTest = profileReducer(state, addPostAC({newPostText: 'New messages'}))
    expect(profileReducerTest.posts.length).toBe(3)
    expect(profileReducerTest.posts[0].message).toBe('New messages')
})

test('set user profile', () => {
    const profileReducerTest = profileReducer(state, setUserProfileAC(profile))
    expect(profileReducerTest.profile).not.toBe(null)
    expect(profileReducerTest.profile?.aboutMe).toBe('Front-end developer')
})

test('set user status', () => {
    const profileReducerTest = profileReducer(state, setUserStatusAC('Hello'))
    expect(profileReducerTest.status).toBe('Hello')
})

test('delete post', () => {
    const profileReducerTest = profileReducer(state, deletePostAC('1'))
    expect(profileReducerTest.posts.length).toBe(1)
})