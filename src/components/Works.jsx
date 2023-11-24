import styles from "../style";
import { teamsoft3 } from "../assets/index";
import { worksBox } from "../constants/index";
const Works = () => {
  return (
    // START WORKS COMPONENT
    <div className="works">
      <div
        className={`content ${styles.flexColumn} xl:flex-row items-center gap-8 pb-[65px]`}
      >
        <div className="content-text">
          <h2 className="title text-[var(--paragraph-color)] text-[25px] font-bold text-center">
            كيف نعمل في{" "}
            <span className="text-[var(--main-color)]">تيم سوفت ؟</span>
          </h2>
          <div
            className={`works-boxs ${styles.flexColumn} xl:flex-row gap-6  mt-[40px]`}
          >
            <div
              className={`${styles.flex} xl:flex-col items-center justify-center mt-[12px] cursor-pointer`}
            >
              {worksBox.map((item) => {
                return (
                  <div
                    key={item.id}
                    className={`works-number ${styles.flex} items-center xl:flex-col`}
                  >
                    <div
                      className={`${item.icon} ${styles.flexCenter} icon w-[50px] md:w-[65px] h-[50px] md:h-[65px] rounded-full text-[23px] bg-[var(--main-color)] text-[var(--white-color)]`}
                    ></div>
                    <div
                      key={item.id}
                      className={`${item.id === "box4" ? "border-none " : ""} ${
                        item.id === "box2" ? "border-dashed" : ""
                      } works-line border-[1px] border-[var(--main-color)] w-[30px] xl:w-[0] h-[0] xl:h-[65px]`}
                    ></div>
                  </div>
                );
              })}
            </div>
            <div>
              {worksBox.map((item) => {
                return (
                  <div
                    key={item.id}
                    className={`works-box ${styles.flexCenter} gap-5 py-[20px] rounded-[8px] cursor-pointer transition-all`}
                  >
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
        <div className="content-img">
          <figure>
            <img src={teamsoft3} alt="teamsoft2" className="w-[100%]" />
          </figure>
        </div>
      </div>
    </div>
    // END WORKS COMPONENT
  );
};

export default Works;
