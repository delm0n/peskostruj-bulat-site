import { BULATTYPES, VOLUMETYPES } from "./bulat-types";

const dopsItems = {
  481508: {
    sort: 1,
    name: "Набор насадок Пескоструй",
    selected: false,
  },
  481497: {
    sort: 2,
    name: "Краги спилковые",
    selected: false,
  },
  481435: {
    sort: 3,
    name: "Дубликатор углов",
    selected: false,
  },
  481436: {
    sort: 4,
    name: "Магнитный угол",
    selected: false,
  },
};
const mainProductsItems = {
  482917: {
    name: "18 литров",
    img: "build/images/order-modal/bulat18",
    webp: "build/images/order-modal/bulat18",
    selected: true,
    type: BULATTYPES.bulat2,
    volume: VOLUMETYPES.volume1,
  },
  482918: {
    name: "24 литров",
    img: "build/images/order-modal/bulat24",
    webp: "build/images/order-modal/bulat24",
    selected: false,
    type: BULATTYPES.bulat2,
    volume: VOLUMETYPES.volume2,
  },
  482919: {
    name: "30 литров",
    img: "build/images/order-modal/bulat30",
    webp: "build/images/order-modal/bulat30",
    selected: false,
    type: BULATTYPES.bulat2,
    volume: VOLUMETYPES.volume3,
  },

  481364: {
    name: "27 литров",
    img: "build/images/order-modal/bulat1-27",
    webp: "build/images/order-modal/bulat1-27",
    selected: false,
    type: BULATTYPES.bulat1,
    volume: VOLUMETYPES.volume1,
  },

  481365: {
    name: "35 литров",
    img: "build/images/order-modal/bulat1-35",
    webp: "build/images/order-modal/bulat1-35",
    selected: false,
    type: BULATTYPES.bulat1,
    volume: VOLUMETYPES.volume2,
  },

  481366: {
    name: "40 литров",
    img: "build/images/order-modal/bulat1-40",
    webp: "build/images/order-modal/bulat1-40",
    selected: false,
    type: BULATTYPES.bulat1,
    volume: VOLUMETYPES.volume3,
  },
};
const dops = [];
const mainProducts = [];
for (let item in goods) {
  if (
    item == "481508" ||
    item == "481497" ||
    item == "481435" ||
    item == "481436"
  ) {
    dops.push({ id: item, ...goods[item], ...dopsItems[item] });
  }
}
for (let item in goods) {
  if (
    item == "482917" ||
    item == "482918" ||
    item == "482919" ||
    item == "481364" ||
    item == "481365" ||
    item == "481366"
  ) {
    mainProducts.push({ id: item, ...goods[item], ...mainProductsItems[item] });
  }
}
const defaultState = {
  dopsState: dops,
  mainProductsState: mainProducts,
  rassrochka: false,
  bulat2_18: goods[482917], //18l
  bulat2_24: goods[482918], //24l
  bulat2_30: goods[482919], //30l

  bulat1_27: goods[481364],
  bulat1_35: goods[481365],
  bulat1_40: goods[481366],
};

const ADD_DOPS = "ADD_DOPS";
const ADD_MAIN = "ADD_MAIN";
const ADD_RASSROCHKA = "ADD_RASSROCHKA";

export const dopsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_DOPS:
      return { ...state, dopsState: [...action.payload] };
    case ADD_MAIN:
      return { ...state, mainProductsState: [...action.payload] };
    case ADD_RASSROCHKA:
      return { ...state, rassrochka: action.payload };
    default:
      return state;
  }
};

export const addDop = (payload) => ({ type: ADD_DOPS, payload });
export const addMain = (payload) => ({ type: ADD_MAIN, payload });
export const addRassrochka = (payload) => ({ type: ADD_RASSROCHKA, payload });
