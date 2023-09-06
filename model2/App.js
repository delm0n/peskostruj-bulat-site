import React from "react";
import Features from "./containers/Features.jsx";
import Header from "./containers/Header.jsx";
import Rassrochka from "./containers/Rassrochka.jsx";
import Kit from "./containers/Kit.jsx";
import Quality from "./containers/Quality.jsx";
import Gallery from "./containers/Gallery-v2.jsx";
import Supremacy from "./containers/Supremacy.jsx";
import Shops from "./containers/Shop.jsx";
import Footer from "./containers/Footer.jsx";
import Feedback from "./containers/Feedback.jsx";
import ModalOrder from "./components/ModalOrder.jsx";
import Customers from "./containers/Customers.jsx";
import Question from "./containers/Question.jsx";
import Performance from "./containers/Performance.jsx";
import Reviews from "./containers/Reviews.jsx";
import ModalSetting from "./containers/ModalSetting.jsx";
import ModalCall from "./components/ModalCall.jsx";
import ModalThankSuccess from "./components/ModalThankSuccess.jsx";
import ModalSuccess from "./components/ModalSuccess.jsx";
import Effective from "./containers/Effective.jsx";
import Complectation from "./containers/Complectation.jsx";
import Reasons from "./containers/Reasons.jsx";
import Sale from "./containers/Sale.jsx";
import Models from "./containers/Models.jsx";

import ModalAppeal from "./components/ModalAppeal.jsx";
import ModalThankReview from "./components/ModalThankReview.jsx";

function App() {
  return (
    <React.Fragment>
      <main>
        <Header />
        <Features />
        <Reviews />
        <Reasons />
        <Sale />
        <Effective />
        <Performance />
        <Models />
        <Complectation />
        <Rassrochka />
        <Quality />
        <Supremacy />
        <Customers />
        <Question />
        <Gallery />
        <Kit />
        <Feedback />
        <Shops />
      </main>
      <Footer btn={{ text: "Купить оптом", link: "/" }} />
      <ModalOrder />
      {/* <ModalFunctional /> */}
      <ModalCall />
      <ModalAppeal />
      <ModalSuccess />
      <ModalThankSuccess />
      {/* <ModalKitDop /> */}
      {/* <ModalInfo /> */}
      <ModalThankReview />
      <ModalSetting />
    </React.Fragment>
  );
}

export default App;
