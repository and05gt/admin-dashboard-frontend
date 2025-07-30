import { useModal } from "../ModalContext.jsx";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import {
  addSupplier,
  fetchSuppliers,
} from "../../redux/suppliers/operations.js";
import { useState } from "react";
import Select, { components } from "react-select";
import sprite from "../../assets/sprite.svg";
import { statusList } from "../../constants/index.js";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DatePicker.css";
import { format } from "date-fns";
import s from "./AddNewSupplier.module.css";
import { selectStyles } from "../../constants/selectStyles.js";

const supplierSchema = yup.object().shape({
  name: yup.string().required("Name is required!"),
  address: yup.string().required("Address is required!"),
  suppliers: yup.string().required("Suppliers is required!"),
  date: yup.string().required("Date is required!"),
  amount: yup.string().required("Amount is required!"),
  status: yup.string().required("Status is required!"),
});

const AddNewSupplier = ({ currentPage }) => {
  const { closeModal } = useModal();
  const dispatch = useDispatch();
  const [selectedStatus, setSelectedStatus] = useState(null);

  const { register, control, handleSubmit, reset } = useForm({
    resolver: yupResolver(supplierSchema),
    mode: "onSubmit",
  });

  const onSubmit = async data => {
    await dispatch(addSupplier(data));
    await dispatch(fetchSuppliers({ page: currentPage }));
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
      <h2 className={s.modalTitle}>Add a new suppliers</h2>
      <form className={s.modalForm} onSubmit={handleSubmit(onSubmit)}>
        <div className={s.formInputWrap}>
          <input
            {...register("name")}
            className={s.input}
            type="text"
            placeholder="Suppliers Info"
          />
          <input
            {...register("address")}
            className={s.input}
            type="text"
            placeholder="Address"
          />
          <input
            {...register("suppliers")}
            className={s.input}
            type="text"
            placeholder="Company"
          />
          <div className={s.dateInput}>
            <Controller
              name="date"
              control={control}
              defaultValue={null}
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
          />
          <Controller
            name="status"
            control={control}
            defaultValue={selectedStatus}
            render={({ field }) => (
              <Select
                {...field}
                components={{ DropdownIndicator: DropdownIndicatorChevron }}
                className={s.select}
                styles={selectStyles}
                placeholder="Status"
                onChange={option => {
                  setSelectedStatus(option.value);
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
export default AddNewSupplier;
