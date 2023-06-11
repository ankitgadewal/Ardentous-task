import "./styles.css";
import useEnhancer from "./useEnhancer";
import { useSelector } from "react-redux";
import AddProduct from "./components/addProduct";
import { useEffect } from "react";

export default function App() {
  const { dltProduct, getProducts } = useEnhancer();
  const { productsData } = useSelector((store) => store.Products);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="App">
      <AddProduct />
      <div>
        <table>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>description</th>
            <th>price</th>
            <th>thumbnail</th>
          </tr>
          {productsData?.products?.map((product) => (
            <tr>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <td>
                <img src={product.thumbnail} width={70} alt={product.title} />
              </td>
              <button onClick={() => dltProduct(product?.id)}>delete</button>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}
