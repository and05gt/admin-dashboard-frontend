import { useModal } from "../ModalContext.jsx";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addProduct, fetchProducts } from "../../redux/products/operations.js";
import { useState } from "react";
import Select, { components } from "react-select";
import sprite from "../../assets/sprite.svg";
import { categoryList } from "../../constants/index.js";
import s from "./AddNewProduct.module.css";
import { selectStyles } from "../../constants/selectStyles.js";

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
  const [selectedCategory, setSelectedCategory] = useState(null);

  const { register, control, handleSubmit, reset } = useForm({
    resolver: yupResolver(productSchema),
    mode: "onSubmit",
  });

  const onSubmit = async data => {
    await dispatch(addProduct(data));
    await dispatch(fetchProducts({ page: currentPage }));
    reset();
    closeModal();
  };

  const DropdownIndicatorChevron = props => (
    <components.DropdownIndicator {...props}>
      <svg width={16} height={16} className={s.indicator}>
        <use href={`${sprite}#icon-chevron-down`}></use>
      </svg>
    </components.DropdownIndicator>
  );

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
          <Controller
            name="category"
            control={control}
            defaultValue={selectedCategory}
            render={({ field }) => (
              <Select
                {...field}
                components={{ DropdownIndicator: DropdownIndicatorChevron }}
                className={s.select}
                styles={selectStyles}
                placeholder="Category"
                onChange={option => {
                  setSelectedCategory(option.value);
                  field.onChange(option?.value);
                }}
                options={categoryList}
                value={categoryList.find(item => item.value === field.value)}
                unstyled
              />
            )}
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
