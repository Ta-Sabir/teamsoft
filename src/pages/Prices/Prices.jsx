import "./Prices.css";
import styles from "../../style";
import { pricesimg } from "../../assets/index";
import { servicesBoxs, pricesboxs, pricesLists } from "../../constants/index";
import { Button } from "../../components/index";
import { Link } from "react-router-dom";

const Prices = () => {
  return (
    // START PRICES PAGE
    <section id="prices">
      <div className="container">
        <div
          className={`prices-hero ${styles.flexColumn} items-center gap-14 lg:flex-row lg:justify-between py-[65px]`}
        >
          <div className="hero-content">
            <h2 className="text-[25px] font-bold mb-[5px]">
              نظام باقات{" "}
              <span className="text-[var(--main-color)]">تيم سوفت</span>
            </h2>
            <span className="text-[#787878] text-[16px] font-bold">
              {" "}
              الرئيسية &gt;{" "}
              <span className="text-[var(--main-color)]">الأسعار</span>
            </span>
            <h3 className="text-[18px] font-bold mt-[40px]">
              نوفر مجموعة من الباقات تناسب جميع العملاء لدينا
            </h3>
            <div className="services-boxs max-w-[100%] mt-[40px]">
              {servicesBoxs.map((item) => {
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
          <div className="hero-img">
            <figure>
              <img
                src={pricesimg}
                alt="pricesimg"
                className="w-[100%] sm:w-[400px]"
              />
            </figure>
          </div>
        </div>
        <div className="prices-content">
          <div className="year-prices block w-fit mx-auto text-[17px] font-bold py-[10px]">
            <span className="year text-[var(--main-color)] cursor-pointer">
              سنوي
            </span>
            <span className="month mr-[15px] cursor-pointer">شهري</span>
          </div>
          <div className="prices-boxs grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 lg:gap-10 pt-[120px] pb-[65px]">
            {pricesboxs.map((item) => {
              return (
                <div
                  key={item.id}
                  className={`prices-box ${
                    item.id === "box2"
                      ? "bg-[var(--main-color)]"
                      : "bg-[var(--sec-color)]"
                  } p-[20px] rounded-[20px] relative cursor-pointer`}
                >
                  <span
                    className={`${item.icon} ${
                      item.id === "box2"
                        ? "text-[--white-color]"
                        : "text-[--third-color]"
                    } text-[40px] absolute top-[-25px] left-[50%] translate-x-[-50%] z-20`}
                  ></span>
                  <h3
                    className={`text-[18px] ${
                      item.id === "box2"
                        ? "text-[var(--white-color)]"
                        : "text-[var--paragraph-color)]"
                    } font-bold text-center my-[30px]`}
                  >
                    {item.title}
                  </h3>
                  <ul className="p-[10px]">
                    {pricesLists.map((list) => {
                      return (
                        <li
                          key={list.id}
                          className={`${
                            item.id === "box2"
                              ? "text-[var(--white-color)]"
                              : "text-[var(--paragraph-color)]"
                          } text-[14px] font-semibold py-[10px] px-[15px]`}
                        >
                          <span
                            className={`${
                              item.id === "box2"
                                ? "icon-check-alt text-[var(--white-color)]"
                                : "icon-checkmark text-[var(--main-color)]"
                            } text-[15px] ml-[10px]`}
                          ></span>
                          {list.title}
                        </li>
                      );
                    })}
                  </ul>
                  <span
                    className={`price-num block ${
                      item.id === "box2"
                        ? "text-[var(--white-color)]"
                        : "text-[var(--main-color)]"
                    } text-[30px] font-bold text-center my-[10px]`}
                  >
                    {item.price}
                  </span>
                  <Link to={"/contact"} className="block text-center mt-[25px]">
                    <Button bg={item.bg} text={item.text}>
                      إحجز الآن{" "}
                    </Button>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
    // END PRICES PAGE
  );
};

export default Prices;
