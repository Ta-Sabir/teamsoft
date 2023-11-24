import "./Contact.css";
import styles from "../../style";
import { contactimg } from "../../assets/index";
import { Button } from "../../components/index";
const Contact = () => {
  return (
    // START CONTACT PAGE
    <section id="contact">
      <div className="container">
        <div
          className={`contact-hero ${styles.flexColumn} items-center gap-14 lg:flex-row lg:justify-between py-[65px]`}
        >
          <div className="hero-content">
            <h2 className="text-[25px] font-bold mb-[5px]">
              تواصل مع فريق{" "}
              <span className="text-[var(--main-color)]">تيم سوفت</span>
            </h2>
            <span className="text-[#787878] text-[16px] font-bold">
              {" "}
              الرئيسية &gt;{" "}
              <span className="text-[var(--main-color)]">تواصل معنا</span>
            </span>
            <h3 className="text-[15px] font-bold mt-[40px]">
              نحن في انتظارك طول الوقت يمكنك ارسال الرسالة وسيتم الرد عليك خلال
              اليوم
            </h3>
            <div className="form mt-[20px]">
              <form>
                <div className={`inputs ${styles.flex} gap-3`}>
                  <div className="input w-[100%]">
                    <label
                      htmlFor="user"
                      className="block text-[#787878] text-[14px] font-semibold my-[10px]"
                    >
                      إسم المستخدم
                    </label>
                    <input
                      type="text"
                      name="user"
                      id="user"
                      placeholder="أكتب اسم المستخدم هنا"
                      className="text-[11px] bg-[#f9fafc] border-[1px] border-[#dedada] w-[100%] py-[11px] px-[15px]"
                    />
                  </div>
                  <div className="input w-[100%]">
                    <label
                      htmlFor="email"
                      className="block text-[#787878] text-[14px] font-semibold my-[10px]"
                    >
                      البريد الإلكتروني
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="أكتب بريدك الالكتروني هنا"
                      className="text-[11px] bg-[#f9fafc] border-[1px] border-[#dedada] w-[100%] py-[11px] px-[15px]"
                    />
                  </div>
                </div>
                <label
                  htmlFor="subject"
                  className="block text-[#787878] text-[14px] font-semibold my-[10px]"
                >
                  عنوان الرسالة
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="أكتب عنوان رسالتك هنا"
                  className="text-[11px] bg-[#f9fafc] border-[1px] border-[#dedada] w-[100%] py-[11px] px-[15px]"
                />
                <label
                  htmlFor="message"
                  className="block text-[#787878] text-[14px] font-semibold my-[10px]"
                >
                  الرسالة
                </label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  className="text-[11px] bg-[#f9fafc] text-[#787878] border-[1px] border-[#dedada] w-[100%] py-[12px] px-[15px]"
                >
                  أكتب رسالتك هنا
                </textarea>
              </form>
              <div className="contact-btn mt-[10px]">
                <Button bg="var(--main-color)" text="var(--white-color)">
                  إرسال
                </Button>
              </div>
            </div>
          </div>
          <div className="hero-img">
            <figure>
              <img
                src={contactimg}
                alt="servicesimg"
                className="max-w-[400px]"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
    // END HOME PAGE
  );
};

export default Contact;
