import {authReducer, AuthType, setAuthUserDateAC} from "./auth-reducer";

let state: AuthType

beforeEach(() => {
    state = {
        id: null,
        login: null,
        email: null,
        isAuth: false,
        captchaUrl: '',
        avatarUrl: ''
    }
})

test('set user date', () => {
    const authReducerTest = authReducer(state, setAuthUserDateAC(1, 'my@mal.com', 'Vladimir', true))
    expect(authReducerTest.isAuth).toBe(true)
    expect(authReducerTest.email).toBe('my@mal.com')
})