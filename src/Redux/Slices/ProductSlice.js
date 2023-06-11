import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "Product",
  initialState: {
    productsData: []
  },
  reducers: {
    setProducts: (state, action) => {
      state.productsData = action.payload;
    },
    deleteProduct: (state, action) => {
      const newProducts = state.productsData?.products?.filter(
        (item) => item.id !== action.payload
      );
      state.productsData.products = newProducts;
    },
    addProduct: (state, action) => {
      state.productsData.products.push({
        ...action.payload,
        id: state.productsData.products.length + 1,
        thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
      });
    }
  }
});

export const { setProducts, deleteProduct, addProduct } = productSlice.actions;
export default productSlice.reducer;
