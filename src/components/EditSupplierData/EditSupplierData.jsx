import { useModal } from "../ModalContext.jsx";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { updateSupplier } from "../../redux/suppliers/operations.js";
import s from "./EditSupplierData.module.css";

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

  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(supplierSchema),
    mode: "onSubmit",
  });

  const onSubmit = data => {
    dispatch(updateSupplier({ supplierId: supplier._id, payload: data }));
    reset();
    closeModal();
  };

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
          <input
            {...register("date")}
            className={s.input}
            type="text"
            placeholder="Delivery date"
          />
          <input
            {...register("amount")}
            className={s.input}
            type="text"
            placeholder="Amount"
          />
          <input
            {...register("status")}
            className={s.input}
            type="text"
            placeholder="Status"
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
