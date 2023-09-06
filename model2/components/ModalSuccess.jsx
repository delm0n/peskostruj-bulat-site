import React from "react";
import Modal from "./Modal/Modal.jsx";
import { useSelector } from "react-redux";

function ModalSuccess() {
  const activeModal = useSelector((state) => state.modals.ModalSuccessActive);
  const csrf = document.querySelector('.form-order_hidden [name="csrf"]').value;
  const valueOrder = document.querySelector(
    '.form-success_hidden [name="order"]'
  ).value;

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Modal
      modalId="order-success"
      modalClass={"modal-success"}
      active={activeModal}
    >
      <h3 className="modal-success__heading">Спасибо за заказ!</h3>
      <p className="modal-success__desc">
        Наш менеджер уже получил ваше обращение.
        <br />
        Проверьте свой номер - вдруг Вы ошиблись?
      </p>
      <form onSubmit={handleSubmit}>
        <div className="modal-success__input">
          <input
            className="input"
            type="text"
            name="phone"
            placeholder="+7 (___)-___-__-__"
          />
        </div>

        <input type="hidden" name="order" data-order="-1" value={valueOrder} />
        <input
          className="modal-success__btn btn"
          value="Все верно"
          type="submit"
        />
      </form>
    </Modal>
  );
}

export default ModalSuccess;
