const defaultState = {
  ModalOptActive: false,
  ModalCallActive: false,
  ModalThankSuccessActive: false,
  ModalSuccessActive: false,
};

const OPT_MODAL = "OPT_MODAL";
const CALL_MODAL = "CALL_MODAL";
const THANK_SUCCESS_MODAL = "THANK_SUCCESS_MODAL";
const SUCCESS_MODAL = "SUCCESS_MODAL";
const CLOSE_MODAL = "CLOSE_MODAL";

export const modalsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CALL_MODAL:
      return { ...state, ModalCallActive: action.payload };
    case OPT_MODAL:
      return { ...state, ModalOptActive: action.payload };
    case THANK_SUCCESS_MODAL:
      return { ...state, ModalThankSuccessActive: action.payload };
    case SUCCESS_MODAL:
      return { ...state, ModalSuccessActive: action.payload };
    case CLOSE_MODAL:
      return {
        ...state,
        ModalOptActive: action.payload,
        ModalCallActive: action.payload,
        ModalThankSuccessActive: action.payload,
        ModalSuccessActive: action.payload,
      };
    default:
      return state;
  }
};

export const openCall = (payload) => ({ type: CALL_MODAL, payload });
export const openOpt = (payload) => ({ type: OPT_MODAL, payload });
export const openThankSuccess = (payload) => ({
  type: THANK_SUCCESS_MODAL,
  payload,
});
export const openSuccess = (payload) => ({ type: SUCCESS_MODAL, payload });
export const closeModal = (payload) => ({ type: CLOSE_MODAL, payload });
