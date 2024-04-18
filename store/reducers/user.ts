import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { User, IUserState } from "@/types/User";

// Define the initial state using that type
const initialState: IUserState = {
    user: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            const user = action.payload;
            state.user = user;
        },
        clearUser: (state) => {
            state.user = null;
        }
    },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
