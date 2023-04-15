export const initialState = 0

export const AppReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'appCount':
            return action.data

        default:
            return state
    }

} 