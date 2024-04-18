import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/store";

export interface IAuthState {
    token: string | null;
}

// Define the initial state using that type
const initialState: IAuthState = {
    token: "",
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setTokenCredentials: (state, action: PayloadAction<string>) => {
            const accessToken = action.payload;
            state.token = accessToken;
        },
        logOut: (state) => {
            state.token = null;
        },
    },
});

export const { setTokenCredentials, logOut } = authSlice.actions;

export const selectCurrentToken = (state: RootState) => state.auth.token;

export default authSlice.reducer;
