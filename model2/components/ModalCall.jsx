import React from "react";
import Modal from "./Modal/Modal.jsx";
import { useSelector } from "react-redux";

function ModalCall() {
  const activeModal = useSelector((state) => state.modals.ModalCallActive);
  const csrf = document.querySelector('.form-order_hidden [name="csrf"]').value;

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Modal modalClass={"modal-call"} active={activeModal}>
      <h3 className="modal-call__heading">Заказать обратный звонок</h3>
      <form className="spnForm" onSubmit={handleSubmit}>
        <div className="modal-call__inputs">
          <input className="input" type="text" name="name" placeholder="Имя" />
          <input
            className="input"
            type="text"
            name="phone"
            placeholder="+7 (___)-___-__-__"
          />
        </div>

        <input className="modal-call__btn btn" type="submit" value="Заказать" />
      </form>
      <p className="modal-call__info">
        Мы свяжемся с Вами в течение 10 минут и проконсультируем по любым
        вопросам
      </p>
    </Modal>
  );
}

export default ModalCall;
