import styles from "../style";
import { servicesimg } from "../assets/index";
import { servicesBoxs } from "../constants/index";
import { Button } from "../components/index";
import { Link } from "react-router-dom";
const Services = () => {
  return (
    // START SERVICES COMPONENT
    <div className="services">
      <div
        className={`content ${styles.flexColumn} lg:flex-row justify-between items-center gap-8 py-[65px]`}
      >
        <div className="content-img">
          <figure>
            <img
              src={servicesimg}
              alt="teamsoft4"
              className="w-[100%] md:w-[600px]"
            />
          </figure>
        </div>
        <div className="services-text">
          <h2 className="title text-[var(--paragraph-color)] text-[25px] font-bold text-center">
            نظام باقات{" "}
            <span className="text-[var(--main-color)]">تيم سوفت !</span>
          </h2>
          <div className="services-boxs w-[100%]mt-[40px]">
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
          <Link to={"prices"} className="btn text-center block mt-7">
            <Button
              width="300px"
              xlwidth="600px"
              bg="var(--main-color)"
              text="var(--white-color)"
            >
              عرض الباقات
            </Button>
          </Link>
        </div>
      </div>
    </div>
    // END SERVICES COMPONENT
  );
};

export default Services;
