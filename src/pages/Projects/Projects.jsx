import "./Projects.css";
import styles from "../../style";
import { projectsimg } from "../../assets/index";
import { projectsImages } from "../../constants/index";
import { Tap } from "../../components/index";
const Projects = () => {
  return (
    // START PROJECTS PAGE
    <section id="projects">
      <div className="container">
        <div
          className={`projects-hero ${styles.flexColumn} items-center gap-14 lg:flex-row lg:justify-between py-[65px]`}
        >
          <div className="hero-content">
            <h2 className="text-[25px] font-bold mb-[5px]">
              معرض أعمال{" "}
              <span className="text-[var(--main-color)]">تيم سوفت</span>
            </h2>
            <span className="text-[#787878] text-[16px] font-bold">
              {" "}
              الرئيسية &gt;{" "}
              <span className="text-[var(--main-color)]">معرض الأعمال</span>
            </span>
            <h3 className="text-[18px] font-bold mt-[40px]">
              من أعمالنا في تصميم المواقع
            </h3>
            <p className="text-[#787878] text-[18px] leading-[1.8] mt-[5px] max-w-[620px]">
              لأننا في شركة تيم سوفت حريصين على جودة الخدمات ورضا العملاء أولا
              فإننا نشعر بالفخر لأننا استطعنا إرضاء عملائنا بتحويل أفكارهم إلى
              تصميمات وتطبيقات ومواقع إحترافية وبجمالية فائقة
            </p>
            <div className={`boxs ${styles.flexStart} gap-10 mt-[25px]`}>
              <div
                className={`box ${styles.flexColumn} items-center gap-2 w-fit cursor-pointer`}
              >
                <span className="icon-globe bg-[var(--sec-color)] text-[var(--main-color)] py-[15px] px-[35px] text-[30px] rounded-[8px]"></span>
                <p className="text-[#787878] text-[15px] font-bold">المواقع</p>
              </div>
              <div
                className={`box ${styles.flexColumn} items-center gap-2 w-fit cursor-pointer`}
              >
                <span className="icon-mobile bg-[var(--sec-color)] text-[var(--main-color)] py-[15px] px-[35px] text-[30px] rounded-[8px]"></span>
                <p className="text-[#787878] text-[15px] font-bold">
                  التطبيقات
                </p>
              </div>
              <div
                className={`box ${styles.flexColumn} items-center gap-2 w-fit cursor-pointer`}
              >
                <span className="icon-layers bg-[var(--sec-color)] text-[var(--main-color)] py-[15px] px-[35px] text-[30px] rounded-[8px]"></span>
                <p className="text-[#787878] text-[15px] font-bold">
                  التصميمات
                </p>
              </div>
            </div>
          </div>
          <div className="hero-img">
            <figure>
              <img
                src={projectsimg}
                alt="projectsimg"
                className="max-w-[400px]"
              />
            </figure>
          </div>
        </div>
        <div className="projects-content grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projectsImages.map((item) => {
            return (
              <div key={item} className="project-box w-[100%] cursor-pointer">
                <div className="project-img w-[100%] h-[230px] relative rounded-[10px]  overflow-hidden">
                  <figure>
                    <img
                      src={item}
                      alt="project-img"
                      className="w-[100%] h-[230px] object-cover"
                    />
                  </figure>
                  <div
                    className={`projects-title ${styles.flexCenter} gap-2 bg-[var(--third-color)] text-[var(--white-color)] text-[13px] rounded-[20px] py-[8px] px-[15px] absolute right-[20px] bottom-[20px] z-[999] cursor-pointer`}
                  >
                    <span className="icon-eye"></span>
                    مشاهدة
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <Tap />
      </div>
    </section>
    // END PROJECTS PAGE
  );
};

export default Projects;
