import { useModal } from '../ModalContext.jsx';
import s from './AddNewProduct.module.css';

const AddNewProduct = () => {
  const { closeModal } = useModal();

  return (
    <>
      <h2 className={s.modalTitle}>Add a new product</h2>
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
