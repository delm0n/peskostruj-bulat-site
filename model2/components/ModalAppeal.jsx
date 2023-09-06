import React from "react";
import Modal from "./Modal/Modal.jsx";
import { useSelector } from "react-redux";

function ModalAppeal() {
  const activeModal = useSelector((state) => state.modals.ModalAppealActive);
  const csrf = document.querySelector('.form-order_hidden [name="csrf"]').value;

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Modal modalClass={"modal-call"} active={activeModal}>
      <h3 className="modal-call__heading heading-center">Отправить вопрос</h3>
      <form onSubmit={handleSubmit} className="spnForm">
        <div className="modal-call__inputs">
          <input className="input" type="text" name="name" placeholder="Имя" />
          <input
            className="input"
            type="text"
            name="phone"
            placeholder="+7 (___)-___-__-__"
          />
          <textarea className="input" placeholder="Ваш вопрос"></textarea>
        </div>

        <input
          className="modal-call__btn btn"
          type="submit"
          value="Отправить"
        />
      </form>
    </Modal>
  );
}

export default ModalAppeal;
