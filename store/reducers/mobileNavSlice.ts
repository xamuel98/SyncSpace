import { createSlice } from '@reduxjs/toolkit';

export interface IMobileNavState {
    isMobileNavOpen: boolean;
    pageNavbar: boolean;
}

const initialState: IMobileNavState = {
    isMobileNavOpen: false,
    pageNavbar: false,
};

const mobileNavSlice = createSlice({
    name: 'mobileNav',
    initialState,
    reducers: {
        toggleMobileNav: (state): void => {
            state.isMobileNavOpen = !state.isMobileNavOpen;
        },
        closeMobileNav: (state): void => {
            state.isMobileNavOpen = false;
        },
        togglePageNavbar: (state): void => {
            state.pageNavbar = !state.pageNavbar;
        },
        closePageNavbar: (state): void => {
            state.pageNavbar = false;
        },
    }
});

export const { toggleMobileNav, closeMobileNav, togglePageNavbar, closePageNavbar } = mobileNavSlice.actions;
export default mobileNavSlice.reducer;