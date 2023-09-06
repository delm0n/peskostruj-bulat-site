const dopsItems = {
  481508: {
    sort: 1,
    name: "Набор из 3 насадок",
    image: "build/images/kit/kit-item-1.png",
    webp: "build/images/kit/kit-item-1.webp",
    kitImage: "build/images/kit/kit-dop-1.png",
    kitWebp: "build/images/kit/kit-dop-1.webp",
    selected: false,
  },
  481497: {
    sort: 2,
    name: "Краги защитные",
    image: "build/images/kit/kit-item-2.png",
    webp: "build/images/kit/kit-item-2.webp",
    kitImage: "build/images/kit/kit-dop-2.png",
    kitWebp: "build/images/kit/kit-dop-2.webp",
    selected: false,
  },
  481435: {
    sort: 3,
    name: "Дубликатор углов",
    image: "build/images/kit/kit-item-3.png",
    webp: "build/images/kit/kit-item-3.webp",
    kitImage: "build/images/kit/kit-dop-3.png",
    kitWebp: "build/images/kit/kit-dop-3.webp",
    selected: false,
  },
  481436: {
    sort: 4,
    name: "Магнитный угол",
    image: "build/images/kit/kit-item-4.png",
    webp: "build/images/kit/kit-item-4.webp",
    kitImage: "build/images/kit/kit-dop-4.png",
    kitWebp: "build/images/kit/kit-dop-4.webp",
    selected: false,
  },
};
const mainProductsItems = {
  482917: {
    name: "Пескоструй «Булат 2» / 18 л",
    kitImage: "build/images/kit/bulat2_18.png",
    kitWebp: "build/images/kit/bulat2_18.webp",
    selected: false,
  },
  482918: {
    name: "Пескоструй «Булат 2» / 24 л",
    kitImage: "build/images/kit/bulat2_24.png",
    kitWebp: "build/images/kit/bulat2_24.webp",
    selected: true,
  },
  482919: {
    name: "Пескоструй «Булат 2» / 30 л",
    kitImage: "build/images/kit/bulat2_30.png",
    kitWebp: "build/images/kit/bulat2_30.webp",
    selected: false,
  },
  481364: {
    name: "Пескоструй «Булат» / 27 л",
    kitImage: "build/images/kit/bulat1_27.png",
    kitWebp: "build/images/kit/bulat1_27.webp",
    selected: false,
  },

  481365: {
    name: "Пескоструй «Булат» / 35 л",
    kitImage: "build/images/kit/bulat1_35.png",
    kitWebp: "build/images/kit/bulat1_35.webp",
    selected: false,
  },

  481366: {
    name: "Пескоструй «Булат» / 40 л",
    kitImage: "build/images/kit/bulat1_40.png",
    kitWebp: "build/images/kit/bulat1_40.webp",
    selected: false,
  },
};

const kitTapeItems = {
  481617: {
    sort: 5,
    name: "Ленты 610 мм",
    img: "build/images/kit/kit-item-5.png",
    webp: "build/images/kit/kit-item-5.webp",
    kitImage: "build/images/kit/kit-dop-5.png",
    kitWebp: "build/images/kit/kit-dop-5.webp",
    count: 0,
    selected: false,
  },
  482005: {
    sort: 6,
    name: "Ленты 915 мм",
    img: "build/images/kit/kit-item-5.png",
    webp: "build/images/kit/kit-item-5.webp",
    kitImage: "build/images/kit/kit-dop-6.png",
    kitWebp: "build/images/kit/kit-dop-6.webp",
    count: 0,
    selected: false,
  },
  482006: {
    sort: 7,
    name: "Ленты для контуровки 1200 мм",
    img: "build/images/kit/kit-item-5.png",
    webp: "build/images/kit/kit-item-5.webp",
    kitImage: "build/images/kit/kit-dop-7.png",
    kitWebp: "build/images/kit/kit-dop-7.webp",
    count: 0,
    selected: false,
  },
};
const dops = [];
const mainProducts = [];
const kitTape = [];
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
// for (let item in goods) {
//   if (item == "481617" || item == "482005" || item == "482006") {
//     kitTape.push({ id: item, ...goods[item], ...kitTapeItems[item] });
//   }
// }
const defaultState = {
  dopsState: dops.sort((a, b) => a.sort - b.sort),
  mainProductsState: mainProducts,

  kitTapeState: kitTape,
  totalPriceKitTape: 0,
  totalOldPriceKitTape: 0,
};

const ADD_DOPS_KIT = "ADD_DOPS_KIT";
const ADD_MAIN_KIT = "ADD_MAIN_KIT";
const ADD_KIT_TAPE = "ADD_KIT_TAPE";
const ADD_KIT_TAPE_OLD_PRICE = "ADD_KIT_TAPE_OLD_PRICE";
const ADD_KIT_TAPE_PRICE = "ADD_KIT_TAPE_PRICE";

export const kitReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_DOPS_KIT:
      return { ...state, dopsState: [...action.payload] };
    case ADD_MAIN_KIT:
      return { ...state, mainProductsState: [...action.payload] };
    case ADD_KIT_TAPE:
      return { ...state, kitTapeState: [...action.payload] };
    case ADD_KIT_TAPE_OLD_PRICE:
      return { ...state, totalOldPriceKitTape: action.payload };
    case ADD_KIT_TAPE_PRICE:
      return { ...state, totalPriceKitTape: action.payload };
    default:
      return state;
  }
};

export const addDopKit = (payload) => ({ type: ADD_DOPS_KIT, payload });
export const addMainKit = (payload) => ({ type: ADD_MAIN_KIT, payload });
export const addKitTape = (payload) => ({ type: ADD_KIT_TAPE, payload });
export const addKitTapePrice = (payload) => ({
  type: ADD_KIT_TAPE_PRICE,
  payload,
});
export const addKitTapeOldPrice = (payload) => ({
  type: ADD_KIT_TAPE_OLD_PRICE,
  payload,
});
