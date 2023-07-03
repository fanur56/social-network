import {
    followAC,
    setCurrentPageAC, setTotalUsersCountAC,
    setUsersAC, toggleFollowingProgressAC, toggleIsFetchingAC,
    UsersMainType,
    usersReducer,
    UsersType,
    usFollowAC
} from "./users-reducer";

let state: UsersMainType
let users: UsersType[]

beforeEach( () => {
    state = {
        users: [
            {
                id: 1,
                name: 'Vladimir',
                uniqueUrlName: 'url',
                status: 'Hello',
                followed: false,
                photos: {
                    small: '',
                    large: ''
                }
            },
            {
                id: 2,
                name: 'Alex',
                uniqueUrlName: 'url',
                status: 'Yo',
                followed: true,
                photos: {
                    small: '',
                    large: ''
                }
            }
        ],
        pageSize: 100,
        totalUsersCount: 0,
        currentPage: 1,
        isFetching: false,
        followingInProgress: []
    }
    users = [
        {
            id: 1,
            name: 'Vladimir',
            uniqueUrlName: 'url',
            status: 'Hello',
            followed: false,
            photos: {
                small: '',
                large: ''
            }
        },
        {
            id: 2,
            name: 'Alex',
            uniqueUrlName: 'url',
            status: 'Yo',
            followed: true,
            photos: {
                small: '',
                large: ''
            }
        },
        {
            id: 3,
            name: 'Agata',
            uniqueUrlName: 'url',
            status: 'Good job',
            followed: true,
            photos: {
                small: '',
                large: ''
            }
        },
    ]
})

test('follow', () => {
    const usersReducerTest = usersReducer(state, followAC(1))
    expect(usersReducerTest.users[0].followed).toBe(true)
})

test('unfollow', () => {
    const usersReducerTest = usersReducer(state, usFollowAC(2))
    expect(usersReducerTest.users[1].followed).toBe(false)
})

test('set users', () => {
    const usersReducerTest = usersReducer(state, setUsersAC(users))
    expect(usersReducerTest.users.length).toBe(3)
})

test('set current page', () => {
    const usersReducerTest = usersReducer(state, setCurrentPageAC(5))
    expect(usersReducerTest.currentPage).toBe(5)
})

test('set total user count', () => {
    const usersReducerTest = usersReducer(state, setTotalUsersCountAC(10))
    expect(usersReducerTest.totalUsersCount).toBe(10)
})

test('toggle is fetching', () => {
    const usersReducerTest = usersReducer(state, toggleIsFetchingAC(true))
    expect(usersReducerTest.isFetching).toBe(true)
})

test('following in progress', () => {
    const usersReducerTest = usersReducer(state, toggleFollowingProgressAC(true, 1))
    expect(usersReducerTest.followingInProgress.length).toBe(1)
})