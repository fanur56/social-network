import {AppReducer, AppReducerType, setAppStatusAC, setInitializedAC} from "./app-reducer";

let state: AppReducerType

beforeEach(() => {
    state = {
        initialized: false,
        status: "idle"
    }
})

test('set initialized', () => {
    const appReducerTest = AppReducer(state, setInitializedAC())
    expect(appReducerTest.initialized).toBe(true)
})

test('set status', () => {
    const appReducerTest = AppReducer(state, setAppStatusAC("loading"))
    expect(appReducerTest.status).toBe("loading")
})