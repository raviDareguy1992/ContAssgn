import { configureStore, createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
    name: 'contactSlice',
    initialState: { iState: [] },
    reducers: {
        contact: (state, action) => {
            state.iState = action.payload
        }
    }
});

const nameInfoSlice = createSlice({
    name: 'nameInfoSlice',
    initialState: { name: '', email: '' },
    reducers: {
        nameaction: (state, action) => {
            state.name = action.payload.name
            state.email = action.payload.email
        }
    }
});



const store = configureStore({
    reducer: { contactred: contactSlice.reducer, nameRed: nameInfoSlice.reducer }
});

export const contactsActions = contactSlice.actions;
export const nameActions = nameInfoSlice.actions;

export default store;