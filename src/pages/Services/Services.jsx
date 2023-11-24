import styles from "../../style";
import { servicesimg } from "../../assets/index";
import { servicesimgs } from "../../constants/index";
import { Button } from "../../components/index";
import { Link } from "react-router-dom";
const Services = () => {
  return (
    // START SERVICES PAGE
    <section id="services">
      <div className="container">
        <div
          className={`services-hero ${styles.flexColumn} items-center gap-14 lg:flex-row lg:justify-between py-[65px]`}
        >
          <div className="hero-content">
            <h2 className="text-[25px] font-bold mb-[5px]">
              خدمات <span className="text-[var(--main-color)]">تيم سوفت</span>
            </h2>
            <span className="text-[#787878] text-[16px] font-bold">
              {" "}
              الرئيسية &gt;{" "}
              <span className="text-[var(--main-color)]">الخدمات</span>
            </span>
            <h3 className="text-[18px] font-bold mt-[40px]">
              تعرف على جميع خدماتنا
            </h3>
            <p className="text-[#787878] text-[18px] leading-[1.8] mt-[5px] max-w-[620px]">
              هنا نحاول مساعدتك في معرفة المزيد من المعلومات التي قد تساعدك في
              خلال فترتك لقيادة موقعك وتجعلك تفكر بشكل أفل من خلال عرض كل
              الأفكار التي تحتاجها وبعض النصائح الهامة لذلك من الرائع تصفحك
              المقالات .
            </p>
            <Link to={"/blog"} className="btn mt-[15px] block">
              <Button bg="var(--main-color)" text="var(--white-color)">
                تصفح المقالات
              </Button>
            </Link>
          </div>
          <div className="hero-img">
            <figure>
              <img
                src={servicesimg}
                alt="servicesimg"
                className="max-w-[400px]"
              />
            </figure>
          </div>
        </div>
        <div
          className={`services-content grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5`}
        >
          {servicesimgs.map((item) => {
            return (
              <div
                key={item.img}
                className="services-box bg-[var(--sec-color)] p-[10px] rounded-[20px] cursor-pointer"
              >
                <div className="services-img my-[20px] mx-auto w-fit">
                  <figure>
                    <img
                      src={item.img}
                      alt="services-img"
                      className="w-[100%]"
                    />
                  </figure>
                </div>
                <h5 className="text-[16px] font-bold text-center my-[14px]">
                  {item.title}
                </h5>
              </div>
            );
          })}
        </div>
        <Link to={"/contact"} className="text-center block mt-[40px] pb-[35px]">
          <Button
            width="390px"
            bg="var(--main-color)"
            text="var(--white-color)"
          >
            أطلب خدمتك الآن
          </Button>
        </Link>
      </div>
    </section>
    // END SERVICES PAGE
  );
};

export default Services;
