import { useModal } from '../ModalContext.jsx';
import s from './AddNewSupplier.module.css';

const AddNewSupplier = () => {
  const { closeModal } = useModal();

  return (
    <>
      <h2 className={s.modalTitle}>Add a new suppliers</h2>
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
