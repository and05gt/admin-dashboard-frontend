import { useModal } from "../ModalContext.jsx";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import { updateSupplier } from "../../redux/suppliers/operations.js";
import { useEffect, useState } from "react";
import Select, { components } from "react-select";
import sprite from "../../assets/sprite.svg";
import { statusList } from "../../constants/index.js";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../AddNewSupplier/DatePicker.css";
import { format } from "date-fns";
import s from "./EditSupplierData.module.css";
import { selectStylesWithValue } from "../../constants/selectStyles.js";

const supplierSchema = yup.object().shape({
  name: yup.string().required("Name is required!"),
  address: yup.string().required("Address is required!"),
  suppliers: yup.string().required("Suppliers is required!"),
  date: yup.string().required("Date is required!"),
  amount: yup.string().required("Amount is required!"),
  status: yup.string().required("Status is required!"),
});

const EditSupplierData = ({ supplier }) => {
  const { closeModal } = useModal();
  const dispatch = useDispatch();

  if (!supplier) return;
  const { name, address, suppliers, date, amount, status } = supplier;

  const [formValues, setFormValues] = useState({
    name: name,
    address: address,
    suppliers: suppliers,
    date: date,
    amount: amount,
    status: status,
  });

  useEffect(() => {
    setFormValues({ name, address, suppliers, date, amount, status });
  }, [name, address, suppliers, date, amount, status]);

  const { register, control, handleSubmit, reset } = useForm({
    resolver: yupResolver(supplierSchema),
    mode: "onSubmit",
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormValues(prevValues => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const onSubmit = data => {
    dispatch(updateSupplier({ supplierId: supplier._id, payload: data }));
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
      <h2 className={s.modalTitle}>Edit supplier</h2>
      <form className={s.modalForm} onSubmit={handleSubmit(onSubmit)}>
        <div className={s.formInputWrap}>
          <input
            {...register("name")}
            className={s.input}
            type="text"
            placeholder="Suppliers Info"
            value={formValues.name}
            onChange={handleInputChange}
          />
          <input
            {...register("address")}
            className={s.input}
            type="text"
            placeholder="Address"
            value={formValues.address}
            onChange={handleInputChange}
          />
          <input
            {...register("suppliers")}
            className={s.input}
            type="text"
            placeholder="Company"
            value={formValues.suppliers}
            onChange={handleInputChange}
          />
          <div className={s.dateInput}>
            <Controller
              name="date"
              control={control}
              defaultValue={formValues.date}
              render={({ field: { value, onChange } }) => (
                <DatePicker
                  selected={value}
                  onChange={date => {
                    if (date) {
                      const formattedDate = format(date, "MMMM d, yyyy");
                      onChange(formattedDate);
                    } else {
                      onChange(null);
                    }
                  }}
                  dateFormat="MMMM d, yyyy"
                  minDate={new Date()}
                  shouldCloseOnSelect={true}
                  placeholderText="Delivery date"
                  className={s.input}
                />
              )}
            />
            <svg width={16} height={16} className={s.iconCalendar}>
              <use href={`${sprite}#icon-calendar`}></use>
            </svg>
          </div>
          <input
            {...register("amount")}
            className={s.input}
            type="text"
            placeholder="Amount"
            value={formValues.amount}
            onChange={handleInputChange}
          />
          <Controller
            name="status"
            control={control}
            defaultValue={formValues.status}
            render={({ field }) => (
              <Select
                {...field}
                components={{ DropdownIndicator: DropdownIndicatorChevron }}
                className={s.select}
                styles={selectStylesWithValue}
                placeholder="Status"
                onChange={option => {
                  setFormValues(prev => ({ ...prev, status: option.value }));
                  field.onChange(option?.value);
                }}
                options={statusList}
                value={statusList.find(item => item.value === field.value)}
                unstyled
              />
            )}
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
export default EditSupplierData;
