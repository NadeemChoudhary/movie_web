export const HomeReducer = (state = {}, action) => {
    switch (action.type) {
        case "banner":
            return { ...state, url: action.url };
        default: return state
    }
}