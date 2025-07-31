import { createContext, use, useEffect, useState } from "react";
import ModalBackdrop from "./Modal/ModalBackdrop.jsx";
import { noScroll } from "../utils/noScroll.js";

export const ModalContext = createContext();

export const useModal = () => use(ModalContext);

export const ModalProvider = ({ children }) => {
  const [modalContent, setModalContent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    noScroll(isModalOpen);
  }, [isModalOpen]);

  const openModal = content => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleCloseModal = e => {
    if ((e.code && e.code === "Escape") || e.target === e.currentTarget) {
      setModalContent(null);
    }
  };

  return (
    <ModalContext.Provider
      value={{ openModal, closeModal, isModalOpen, handleCloseModal }}>
      {children}
      {modalContent && <ModalBackdrop>{modalContent}</ModalBackdrop>}
    </ModalContext.Provider>
  );
};
