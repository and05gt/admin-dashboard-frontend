import { useModal } from '../ModalContext.jsx';
import s from './EditSupplierData.module.css';

const EditSupplierData = () => {
  const { closeModal } = useModal();

  return (
    <>
      <h2 className={s.modalTitle}>Edit supplier</h2>
      <form className={s.modalForm}>
        <div className={s.formInputWrap}>
          <input
            className={s.input}
            type="text"
            name=""
            placeholder="Suppliers Info"
          />
          <input
            className={s.input}
            type="text"
            name=""
            placeholder="Address"
          />
          <input
            className={s.input}
            type="text"
            name=""
            placeholder="Company"
          />
          <input
            className={s.input}
            type="text"
            name=""
            placeholder="Delivery date"
          />
          <input className={s.input} type="text" name="" placeholder="Amount" />
          <input className={s.input} type="text" name="" placeholder="Status" />
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
