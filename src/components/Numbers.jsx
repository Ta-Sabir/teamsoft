import styles from "../style";
import { teamsoft2 } from "../assets/index";
import { numberBoxs, contentBox } from "../constants/index";

const Numbers = () => {
  return (
    // START NUMBERS COMPONENT
    <div className="numbers">
      <div className="boxs grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-[20px]">
        {numberBoxs.map((item) => {
          return (
            <div
              key={item.id}
              className={`box shadow ${styles.flex} justify-center sm:justify-start gap-[30px] sm:gap-5 p-[25px] rounded-[10px] cursor-pointer`}
            >
              <div
                className={`icon w-[58px] h-[58px] bg-[var(--sec-color)] rounded-full ${styles.flexCenter}`}
              >
                <span
                  className={`${item.icon} text-[var(--main-color)] text-[28px] `}
                ></span>
              </div>
              <div className={`${styles.flexColumn} gap-2`}>
                <p className="text-[#787878] text-[15px]">{item.title}</p>
                <span className="text-[18px] font-black">{item.number}</span>
              </div>
            </div>
          );
        })}
      </div>
      <div
        className={`content ${styles.flexColumn} xl:flex-row items-center gap-[50px] py-[65px] pt-[140px]`}
      >
        <div className="content-img">
          <figure>
            <img
              src={teamsoft2}
              alt="teamsoft2"
              className="w-[90%] lg:w-[500px]"
            />
          </figure>
        </div>
        <div className="content-text">
          <h2 className="title text-[var(--paragraph-color)] text-[25px] font-bold text-center">
            لماذا <span className="text-[var(--main-color)]">تيم سوفت ؟</span>
          </h2>
          <div className="content-boxs grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-[20px] w-[100%] mt-[40px]">
            {contentBox.map((item) => {
              return (
                <div
                  key={item.id}
                  className={`content-box ${styles.flexStart} gap-5 p-[25px] py-[35px] rounded-[8px] cursor-pointer mt-[25px] transition-all`}
                >
                  <div className="icon">
                    <span
                      className={`${item.icon} text-[var(--main-color)] text-[30px]`}
                    ></span>
                  </div>
                  <div className={`${styles.flexColumn} gap-2`}>
                    <h1 className="text-[18px] font-bold">{item.title}</h1>
                    <p className="text-[#787878] text-[15px] leading-[1.8]">
                      {item.pargraph}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
    // END NUMBERS COMPONENT
  );
};

export default Numbers;
