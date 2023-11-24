import "./Partners.css";
import { partn1, partn2, partn3 } from "../../assets/index";
const Partners = () => {
  const images = [partn1, partn2, partn3, partn2, partn1];
  return (
    // START PARTNERS COMPONENT
    <div className="partners py-[30px]">
      <div className="partners-title">
        <h2 className="text-[var(--paragraph-color)] text-[25px] text-center font-bold leading-[1.8]">
          شركاؤنا في <span className="text-[var(--main-color)]">النجاح</span>
        </h2>
        <p className="text-[#787878] text-[15px] text-center my-[5px]">
          أعمال نفتخر بها
        </p>
      </div>
      <div
        className={`partners-imgs grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-12 py-[20px]  mt-[40px]`}
      >
        {images.map((image, item) => {
          return (
            <img
              key={item}
              src={`${image}`}
              alt="partner-image"
              className="w-[165px] p-[10px] rounded-[8px] transition-all"
            />
          );
        })}
      </div>
    </div>
    // END PARTNERS COMPONENT
  );
};

export default Partners;
