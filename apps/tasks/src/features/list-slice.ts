import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface Contact {
  id: string;
  name: string;
  avatar: string;
}

type ContactState = {
  entities: Contact[];
  loading?: boolean;
};

export const fetchContacts = createAsyncThunk(
  "contacts/fetch",
  async (): Promise<Contact[]> => {
    const response = await fetch(
      "https://6172cfe5110a740017222e2b.mockapi.io/elements"
    ).then((res) => res.json());

    return response;
  }
);

const initialState: ContactState = {
  entities: [],
  loading: false,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    setContacts: () => {},
  },
  extraReducers: (builder) => {
    builder.addCase(fetchContacts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      state.entities = action.payload;
      state.loading = false;
    });
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { setContacts } = contactsSlice.actions;
export default contactsSlice;
