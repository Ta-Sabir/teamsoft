import styles from "../style";
import { heroimg } from "../assets/index";
import { Button } from "../components/index";
const Hero = () => {
  const heroContent = [
    {
      id: "hero",
      heading: "إحجز موقعك بقسط شهري إبدأالتقسيط الآن",
      pargraph:
        "نقوم بتصميم المواقع الخاصة بالشركات والمؤسسات والمواقع الشخصية والفنية والتصميم وبرمجة القوالب والاسكربتات وبرمجة القوالب الخاصة على الووردبريس وامكانية دفع شهري أو سنوي",
      btn1: "إنشاء موقعك",
      btn2: "إستشارة مجانية",
    },
  ];
  return (
    // START HERO COMPONENT
    <div className="hero py-[65px]">
      <div
        className={`${styles.flexColumn} items-center xl:flex-row xl:justify-between text-center xl:text-right gap-[50px] xl:gap-[150px]`}
      >
        {heroContent.map((item) => {
          return (
            <div key={item.id} className="hero-content max-w-[550px]">
              <h1 className="text-[38px] font-bold leading-[1.6]">
                {item.heading}
              </h1>
              <p className="text-[17px] text-[#787878] leading-[1.8] mt-3">
                {item.pargraph}
              </p>
              <div
                className={`buttons mt-5 ${styles.flex} justify-center xl:justify-start gap-2`}
              >
                <Button bg="var(--main-color)" text="var(--white-color)">
                  {item.btn1}
                </Button>
                <Button bg="transparent" text="var(--main-color)">
                  {item.btn2}
                </Button>
              </div>
            </div>
          );
        })}
        <div className="hero-img">
          <figure>
            <img src={heroimg} alt="heroimg" className="w-[90%] lg:w-[500px]" />
          </figure>
        </div>
      </div>
    </div>
    // END HERO COMPONENT
  );
};

export default Hero;
