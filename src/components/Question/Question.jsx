import { Link } from "react-router-dom";
import "./Question.css";
import styles from "../../style";
import Button from "../Button";
import { question } from "../../constants/index";
const Question = () => {
  return (
    // START QUESTION COMPONENT
    <div className="question">
      <div
        className={`container ${styles.flexColumn} xl:flex-row gap-10 py-[65px]`}
      >
        <div className="question-title">
          <h2 className="text-[var(--paragraph-color)] text-[25px] font-bold">
            لديك <span className="text-[var(--main-color)]">سؤال</span>{" "}
          </h2>
          <p className="text-[#787878] text-[15px] font-semibold my-[20px]">
            نعرض بعض الأسئلة التي تتكرر من عملاء الموقع لدينا إذا كان لك سؤال
            آخر تواصل معنا
          </p>
          <Link to={"contact"}>
            <Button bg="var(--main-color)" text="var(--white-color)">
              تحدث معنا
            </Button>
          </Link>
        </div>
        <div className="question-content flex-1">
          {question.map((item) => {
            return (
              <div
                key={item.id}
                className="question-box p-[10px] cursor-pointer"
              >
                <div
                  className={`title ${styles.flexBetween} gap-[20px] p-[10px]`}
                >
                  <h1 className="text-[14px]">{item.question}</h1>
                  <span className="icon-cheveron-down text-[var(--main-color)]"></span>
                </div>
                <p className="text text-[14px] font-normal leading-[1.6] p-[10px] hidden">
                  {item.answer}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
    // END QUESTION COMPONENT
  );
};

export default Question;
