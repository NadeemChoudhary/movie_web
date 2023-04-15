import { combineReducers } from "redux"
import { AppReducer } from "./App/AppReducer"
import { HomeReducer } from "./Home/HomeReducer"

export const Store = combineReducers({
    App : AppReducer ,
    Home : HomeReducer 
})