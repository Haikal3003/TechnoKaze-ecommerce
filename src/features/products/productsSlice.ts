import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export interface Product {
  Id: string;
  Brand: string;
  Description: string;
  Image: string;
  Price: string;
  Tag: string;
}

interface ProductsState {
  laptops: Product[];
  mobiles: Product[];
}

const initialState: ProductsState = {
  laptops: [],
  mobiles: [],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setLaptops: (state, action: PayloadAction<Omit<Product, 'id'>[]>) => {
      const laptops = action.payload.map((product) => ({
        ...product,
        id: uuidv4(),
      }));
      state.laptops = laptops;
    },
    setMobiles: (state, action: PayloadAction<Omit<Product, 'id'>[]>) => {
      const mobiles = action.payload.map((product) => ({
        ...product,
        id: uuidv4(),
      }));
      state.mobiles = mobiles;
    },
  },
});

export const { setLaptops, setMobiles } = productsSlice.actions;

export default productsSlice.reducer;
