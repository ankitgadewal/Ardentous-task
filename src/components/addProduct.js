import { Formik, Field, Form } from "formik";
import useEnhancer from "../useEnhancer";

export default function AddProduct() {
  const { AddProduct } = useEnhancer();
  return (
    <div>
      <h3>Add Product</h3>
      <Formik
        initialValues={{ title: "", description: "", price: 0 }}
        onSubmit={(values, { resetForm }) => {
          AddProduct(values);
          resetForm();
        }}
      >
        {() => (
          <Form>
            <label>Title: </label>
            <Field name="title" required /> <br />
            <label>Description: </label>
            <Field name="description" required />
            <br />
            <label>Price: </label>
            <Field name="price" required />
            <br />
            <button type="submit">Add product</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
