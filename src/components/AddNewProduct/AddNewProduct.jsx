import { useModal } from "../ModalContext.jsx";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addProduct, fetchProducts } from "../../redux/products/operations.js";
import s from "./AddNewProduct.module.css";

const productSchema = yup.object().shape({
  name: yup.string().required("Name is required!"),
  suppliers: yup.string().required("Suppliers is required!"),
  stock: yup.string().required("Stock is required!"),
  price: yup.string().required("Price is required!"),
  category: yup.string().required("Category is required!"),
});

const AddNewProduct = ({ currentPage }) => {
  const { closeModal } = useModal();
  const dispatch = useDispatch();

  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(productSchema),
    mode: "onSubmit",
  });

  const onSubmit = async data => {
    await dispatch(addProduct(data));
    await dispatch(fetchProducts({ page: currentPage }));
    reset();
    closeModal();
  };

  return (
    <>
      <h2 className={s.modalTitle}>Add a new product</h2>
      <form className={s.modalForm} onSubmit={handleSubmit(onSubmit)}>
        <div className={s.formInputWrap}>
          <input
            {...register("name")}
            className={s.input}
            type="text"
            placeholder="Product Info"
          />
          <input
            {...register("category")}
            className={s.input}
            type="text"
            placeholder="Category"
          />
          <input
            {...register("suppliers")}
            className={s.input}
            type="text"
            placeholder="Suppliers"
          />
          <input
            {...register("stock")}
            className={s.input}
            type="text"
            placeholder="Stock"
          />
          <input
            {...register("price")}
            className={s.input}
            type="text"
            placeholder="Price"
          />
        </div>
        <div className={s.btnWrapper}>
          <button className={`${s.btn} ${s.addBtn}`} type="submit">
            Add
          </button>
          <button
            className={`${s.btn} ${s.cancelBtn}`}
            type="button"
            onClick={closeModal}>
            Cancel
          </button>
        </div>
      </form>
    </>
  );
};
export default AddNewProduct;
