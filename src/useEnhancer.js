import { useDispatch } from "react-redux";
import {
  addProduct,
  deleteProduct,
  setProducts
} from "./Redux/Slices/ProductSlice";

export default function useEnhancer() {
  const dispatch = useDispatch();

  async function getProducts() {
    const response = await fetch("https://dummyjson.com/products");
    const jsonRes = await response.json();
    dispatch(setProducts(jsonRes));
    console.log(jsonRes);
  }

  function dltProduct(id) {
    dispatch(deleteProduct(id));
  }

  function AddProduct(formData) {
    dispatch(addProduct(formData));
  }

  return { dltProduct, getProducts, AddProduct };
}
