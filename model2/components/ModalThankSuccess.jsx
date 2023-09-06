import React from "react";
import Modal from "./Modal/Modal.jsx";
import { useSelector } from "react-redux";
import Image from "./Image.jsx";

function ModalThankSuccess() {
  const activeModal = useSelector(
    (state) => state.modals.ModalThankSuccessActive
  );
  return (
    <Modal modalClass={"modal-thank-success"} active={activeModal}>
      <h3 className="modal-thank-success__heading">Благодарим за обращение!</h3>
      <p className="modal-thank-success__desc">
        Менеджер уже получил Вашу контактную информацию, он свяжется с Вами в
        течение 10 минут
      </p>
    </Modal>
  );
}

export default ModalThankSuccess;
