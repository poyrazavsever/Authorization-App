import { createSlice } from "@reduxjs/toolkit";

export const auth = createSlice({

    name:"auth",
    initialState:{
        user:localStorage.getItem("auth") ?? false
    },
    reducers :{
        login: (state, action) => {
            localStorage.setItem("auth", action.payload)
            state.user = true
        },
        logout: state => {
            localStorage.removeItem("auth")
            state.user = false 
        }
    }

})

export const {login, logout} = auth.actions

export default auth.reducer