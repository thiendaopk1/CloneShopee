import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import addressApi from '../../../api/addressApi';
import StorageKeys from '../../../constants/storage-key';
let addressItemsStore = [];

if (localStorage.getItem('address')) addressItemsStore = JSON.parse(localStorage.getItem('address'));

const addressSlice = createSlice({
  name: 'address',
  initialState: {
    addressItems: addressItemsStore,
  },
  reducers: {
    addAddress(state, action) {
      const newItem = action.payload;
      state.addressItems.push(newItem);
      localStorage.setItem('address', JSON.stringify(state.addressItems));
    },

    editAddress(state, action) {
      const currentItem = action.payload;

      const index = state.addressItems((x) => x.id === currentItem.id);

      state.addressItems[index].push(currentItem);

      localStorage.setItem('address', JSON.stringify(state.addressItems));
    },

    removeAddress(state, action) {
      const { id } = action.payload;
      const index = state.addressItems.findIndex((x) => x.id === id);
      let res1 = JSON.parse(localStorage.getItem('address'));
      res1.splice(index, 1);
      state.addressItems = res1;
      localStorage.setItem('address', JSON.stringify(state.addressItems));
    },

    // setStateAddress(state, action) {
    //   const currentItem = action.payload;
    // },
  },
});
