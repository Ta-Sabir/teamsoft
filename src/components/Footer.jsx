import styles from "../style";
import { teamsoftlogo } from "../assets/index";
import { socialMedia, navLinks } from "../constants/index";
import { NavLink } from "react-router-dom";
const Footer = () => {
  const footerBox1 = [
    {
      id: "box1",
      pargraph:
        "تسعى شركة تيم سوفت إلى تغيير مفهوم تصميم المواقع وبرمجة المواقع بشكل خاص وحلول المواقع بشكل عام وذلك من خلال تقديم خدمة متنوعة وعروض مناسبة لجميع الأفراد والشركات بأحدث التقنيات وأفضل جودة وأسرع وقت مع كل ذلك تأتي الأمانة والصدق والوضوح مع العملاء مع إمكانية تقسيط الدفع",
      title: "تابع تيم سوفت",
    },
  ];
  const footerBox2 = [
    {
      id: "box2-1",
      title: "اذا كان لديك أي سؤال أو إستفسار",
    },
    {
      id: "box2-2",
      title: "بريد المبيعات",
    },
    {
      id: "box2-3",
      title: "Teamsoft@soft",
    },
    {
      id: "box2-4",
      title: "اتصل الآن واتساب",
    },
    {
      id: "box2-5",
      title: "+2135758372",
    },
  ];
  return (
    // START FOOTER COMPONENT
    <div className="footer py-[60px]">
      <div className="container grid grid-cols-1 text-center sm:grid-cols-2 lg:grid-cols-3 lg:text-start gap-4 lg:gap-10">
        {footerBox1.map((item) => {
          return (
            <div key={item.id} className="box">
              <figure>
                <img src={teamsoftlogo} alt="teamsoftlogo" />
              </figure>
              <p className="text-[#787878] text-[15px] leading-[1.7]">
                {item.pargraph}
              </p>
              <h5 className="text-[var(--main-color)] text-[19px] font-bold my-[12px]">
                {item.title}
              </h5>
              <div
                className={`scoials-media ${styles.flexCenter} gap-4 my-[15px]`}
              >
                {socialMedia.map((item) => {
                  return (
                    <a
                      key={item.id}
                      href={item.link}
                      className={`${item.icon} bg-[var(--paragraph-color)] hover:bg-[var(--main-color)] text-[var(--white-color)] w-[40px] h-[40px] rounded-full ${styles.flexCenter} transition-all`}
                    ></a>
                  );
                })}
              </div>
            </div>
          );
        })}
        <div className="box">
          <h5 className="text-[var(--main-color)] text-[19px] mr-[12px] font-bold my-[12px]">
            روابط مختصرة
          </h5>
          <div className={`links ${styles.flexColumn} gap-1`}>
            {navLinks.map((item) => {
              return (
                <NavLink
                  key={item.id}
                  to={item.id === "home" ? "/" : item.id}
                  target="_blank"
                  className="text-[#787878] text-[18px] py-[8px] px-[12px] hover:bg-[var(--sec-color)] transition-all"
                >
                  {item.title}
                </NavLink>
              );
            })}
            <NavLink
              to={"/legal"}
              className="text-[#787878] text-[18px] py-[8px] px-[12px] hover:bg-[var(--sec-color)] transition-all"
            >
              سياسية الخصوصية
            </NavLink>
          </div>
        </div>
        <div className="box">
          <h5 className="text-[var(--main-color)] text-[19px] mr-[12px] font-bold my-[12px]">
            مبيعات تيم سوفت
          </h5>
          {footerBox2.map((item) => {
            return (
              <ul key={item.id}>
                <li
                  className={`${
                    item.id === "box3-3" || item.id === "box3-5"
                      ? "text-[var(--main-color)]"
                      : "text-[#787878]"
                  } text-[17px] py-[8px] px-[12px] hover:bg-[var(--sec-color)] transition-all cursor-pointer`}
                >
                  {item.title}
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    </div>
    // END FOOTER COMPONENT
  );
};

export default Footer;
