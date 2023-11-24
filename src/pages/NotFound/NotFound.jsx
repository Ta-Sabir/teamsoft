import styles from "../../style";
import { eroor404 } from "../../assets/index";
const NotFound = () => {
  return (
    // START NOTFOUND PAGE
    <section className="error-404 py-[65px]">
      <div className="container mt-12">
        <div
          className={`section-content ${styles.flexColumn} items-center justify-center`}
        >
          <h2 className="text-[#263238] text-[22px] font-bold text-center leading-[1.8]">
            يبدو أن هناك خطأ ما, هذه الصفحة غير موجودة المرجو التحقق من الرابط و
            المحاولة مجددا .
          </h2>
          <figure>
            <img
              src={eroor404}
              alt="404-error image"
              className="w-[450px] cursor-pointer"
            />
          </figure>
        </div>
      </div>
    </section>
    // END NOTFOUND PAGE
  );
};

export default NotFound;
