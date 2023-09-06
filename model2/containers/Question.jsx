import React, { useState } from "react";
import { openAnswers } from "../store/modalsReducer.js";
import { useDispatch } from "react-redux";
import ModalAnswers from "../components/ModalAnswers.jsx";
function Question() {
  const dispatch = useDispatch();
  const [questionList, setquestionList] = useState([
    {
      title: "Какой <br/> абразив",
      text: "лучше <br/> использовать?",
      answersTitle: "Какой абразив<br/> лучше использовать?",
      answersText:
        "Абразивов, которые подходят для пескоструйного аппарата, много. Можно использовать: кварцевый песок, купершлак, никельшлак, гарнет, корунд, пластиковые гранулы, стеклянные гранулы. Обратите внимание на то, что абразивы должны быть мелкой фракции. При необходимости их нужно очистить от мусора (просеять).",
    },
    {
      title: "Для каких <br/> материалов",
      text: " подойдет этот <br/> пескоструй?",
      answersTitle: "Для каких материалов <br/>подойдет этот пескоструй?",
      answersText:
        "«Булат 2» практически универсален. С ним комфортно обрабатывать: металл, дерево, стекло, кирпич, сруб, брусчатку, камень, тротуарную плитку, бетон, нержавеющую сталь, зеркала, брёвна, гранит и даже мрамор. При этом учтены особенности каждого материала. Оперативно зачистить металл от ржавчины и деликатно матировать стекло получится одинаково хорошо.",
    },
    {
      title: "Какой <br/> компрессор",
      text: "нужен <br/> для пескоструя?",
      answersTitle: "Какой компрессор <br/>нужен для пескоструя?",
      answersText:
        "Чем больше ресивер и производительность компрессора, тем меньше будет остановок в работе для создания давления в баке. Также вы можете использовать дополнительный ресивер от 30 л.",
    },
    {
      title: "Можно ли <br/> вернуть",
      text: "товар, если он <br/> меня не устроит?",
      answersTitle: "Можно ли вернуть товар,<br/> если что-то не устроит?",
      answersText:
        "Да, в течение 7 дней можно вернуть, в течение 14 обменять. НО, каждый товар проходит тройной контроль ОТК (приемка с производства, проверка на складе, проверка перед отправкой) - брак исключен.",
    },
  ]);
  const [answers, setAnswers] = useState({ title: "", text: "" });

  const getAnswers = (question) => {
    setAnswers({ title: question.answersTitle, text: question.answersText });
    dispatch(openAnswers(true));
  };
  return (
    <section id="question" className="question">
      <div className="content-container">
        <div className="title-box">
          <h3 className="title">
            <span className="text-primary">FAQ — ответы</span> на самые
            популярные вопросы
          </h3>
        </div>
        <ul className="question__list">
          {questionList.map((q, i) => (
            <li className="question__item" key={i}>
              <h3
                dangerouslySetInnerHTML={{ __html: q.title }}
                className="question__item-heading"
              ></h3>
              <p
                dangerouslySetInnerHTML={{ __html: q.text }}
                className="question__item-desc"
              ></p>
              <button
                onClick={() => getAnswers(q)}
                className="question__item-btn"
              >
                Ответ
              </button>
            </li>
          ))}
        </ul>
      </div>
      <ModalAnswers answers={answers} />
    </section>
  );
}

export default Question;
