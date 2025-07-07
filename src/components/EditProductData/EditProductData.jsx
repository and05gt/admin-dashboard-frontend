import { useModal } from '../ModalContext.jsx';
import s from './EditProductData.module.css';

const EditProductData = () => {
  const { closeModal } = useModal();

  return (
    <>
      <h2 className={s.modalTitle}>Edit data</h2>
      <form className={s.modalForm}>
        <div className={s.formInputWrap}>
          <input
            className={s.input}
            type="text"
            name=""
            placeholder="Product Info"
          />
          <input
            className={s.input}
            type="text"
            name=""
            placeholder="Category"
          />
          <input
            className={s.input}
            type="text"
            name=""
            placeholder="Suppliers"
          />
          <input className={s.input} type="text" name="" placeholder="Stock" />
          <input className={s.input} type="text" name="" placeholder="Price" />
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
