import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import addressApi from '../../../api/addressApi';
import StorageKeys from '../../../constants/storage-key';
let addressItemsStore = [];

if (localStorage.getItem('address')) addressItemsStore = JSON.parse(localStorage.getItem('address'));

function setStatus(listAddress, currentAddress, state) {
  console.log('currentAddress', currentAddress);
  if (listAddress.length > 1) {
    if (currentAddress.status === true) {
      for (let i = 0; i < listAddress.length; i++) {
        listAddress[i].status = false;
        if (listAddress[i].id === currentAddress.id) {
          listAddress[i].status = true;
        }
      }
      state.addressItems = listAddress;
      return localStorage.setItem('address', JSON.stringify(state.addressItems));
    } else {
      return;
    }
  }
}

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
      // set các status còn lại
      let listAddress = JSON.parse(localStorage.getItem('address'));
      const currentAddress = listAddress.find((x) => x.id === newItem.id);
      setStatus(listAddress, currentAddress, state);
    },

    removeAddress(state, action) {
      const { id } = action.payload;
      const index = state.addressItems.findIndex((x) => x.id === id);
      let res1 = JSON.parse(localStorage.getItem('address'));
      res1.splice(index, 1);
      state.addressItems = res1;
      localStorage.setItem('address', JSON.stringify(state.addressItems));
    },

    setStateAddress(state, action) {
      const { id, status, name, phone, address } = action.payload;
      const index = state.addressItems.findIndex((x) => x.id === id);
      state.addressItems[index].status = status;
      state.addressItems[index].name = name;
      state.addressItems[index].phone = phone;
      state.addressItems[index].address = address;
      localStorage.setItem('address', JSON.stringify(state.addressItems));
      // set các status còn lại
      let listAddress = JSON.parse(localStorage.getItem('address'));
      const currentAddress = listAddress.find((x) => x.id === id);
      setStatus(listAddress, currentAddress, state);
    },

    setStatusAddress(state, action) {
      const { id, status } = action.payload;
      const index = state.addressItems.findIndex((x) => x.id === id);
      state.addressItems[index].status = status;
      localStorage.setItem('address', JSON.stringify(state.addressItems));
      // set status còn lại
      let listAddress = JSON.parse(localStorage.getItem('address'));
      const currentAddress = listAddress.find((x) => x.id === id);
      setStatus(listAddress, currentAddress, state);
    },

    setAddress(state, action) {
      const addressList = action.payload;
      console.log('address', addressList);
      state.addressItems = addressList;
      localStorage.setItem('address', JSON.stringify(addressList));
    },

    removeAllAddress(state) {
      localStorage.removeItem('address');
      state.current = {};
      state.addressItems = [];
    },
  },
});

const { actions, reducer } = addressSlice;
export const { addAddress, setStateAddress, setStatusAddress, removeAddress, setAddress, removeAllAddress } =
  actions;
export default reducer;
