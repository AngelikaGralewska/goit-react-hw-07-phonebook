import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://63e7e876cbdc5658737fbd7a.mockapi.io/contacts';

export const fetchContacts = createAsyncThunk('contacts/fetchAll',async () => { 
    const response = await axios.get('/contacts');
    return response.data;
    }
  );
  
  export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (newItem, thunkAPI) => {
      try {
        const response = await axios.post('/contacts', newItem);
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  
  export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (id, thunkAPI) => {
      try {
        const response = await axios.delete(`/contacts/${id}`);
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );