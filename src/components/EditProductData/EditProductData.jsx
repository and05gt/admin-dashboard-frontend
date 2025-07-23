import { useModal } from "../ModalContext.jsx";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { updateProduct } from "../../redux/products/operations.js";
import s from "./EditProductData.module.css";

const productSchema = yup.object().shape({
  name: yup.string().required("Name is required!"),
  suppliers: yup.string().required("Suppliers is required!"),
  stock: yup.string().required("Stock is required!"),
  price: yup.string().required("Price is required!"),
  category: yup.string().required("Category is required!"),
});

const EditProductData = ({ product }) => {
  const { closeModal } = useModal();
  const dispatch = useDispatch();

  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(productSchema),
    mode: "onSubmit",
  });

  const onSubmit = data => {
    dispatch(updateProduct({ productId: product._id, payload: data }));
    reset();
    closeModal();
  };

  return (
    <>
      <h2 className={s.modalTitle}>Edit data</h2>
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
          <button className={`${s.btn} ${s.saveBtn}`} type="submit">
            Save
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
export default EditProductData;
