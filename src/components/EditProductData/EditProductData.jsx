import { useModal } from "../ModalContext.jsx";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import { updateProduct } from "../../redux/products/operations.js";
import { useEffect, useState } from "react";
import Select, { components } from "react-select";
import sprite from "../../assets/sprite.svg";
import { categoryList } from "../../constants/index.js";
import s from "./EditProductData.module.css";
import { selectStylesWithValue } from "../../constants/selectStyles.js";

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

  if (!product) return;
  const { name, category, suppliers, stock, price } = product;

  const [formValues, setFormValues] = useState({
    name: name,
    category: category,
    suppliers: suppliers,
    stock: stock,
    price: price,
  });

  useEffect(() => {
    setFormValues({ name, category, suppliers, stock, price });
  }, [name, category, suppliers, stock, price]);

  const { register, control, handleSubmit, reset } = useForm({
    resolver: yupResolver(productSchema),
    mode: "onSubmit",
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormValues(prevValues => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const onSubmit = async () => {
    await dispatch(
      updateProduct({ productId: product._id, payload: formValues })
    );
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
      <h2 className={s.modalTitle}>Edit data</h2>
      <form className={s.modalForm} onSubmit={handleSubmit(onSubmit)}>
        <div className={s.formInputWrap}>
          <input
            {...register("name")}
            className={s.input}
            type="text"
            placeholder="Product Info"
            value={formValues.name}
            onChange={handleInputChange}
          />
          <Controller
            name="category"
            control={control}
            defaultValue={formValues.category}
            render={({ field }) => (
              <Select
                {...field}
                components={{ DropdownIndicator: DropdownIndicatorChevron }}
                className={s.select}
                styles={selectStylesWithValue}
                placeholder="Category"
                options={categoryList}
                value={categoryList.find(item => item.value === field.value)}
                onChange={option => {
                  setFormValues(prev => ({ ...prev, category: option.value }));
                  field.onChange(option.value);
                }}
                unstyled
              />
            )}
          />
          <input
            {...register("suppliers")}
            className={s.input}
            type="text"
            placeholder="Suppliers"
            value={formValues.suppliers}
            onChange={handleInputChange}
          />
          <input
            {...register("stock")}
            className={s.input}
            type="text"
            placeholder="Stock"
            value={formValues.stock}
            onChange={handleInputChange}
          />
          <input
            {...register("price")}
            className={s.input}
            type="text"
            placeholder="Price"
            value={formValues.price}
            onChange={handleInputChange}
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
