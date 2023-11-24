import styles from "../style";

const Tap = () => {
  return (
    // START TAP COMPONENT
    <div
      className={`tap ${styles.flexBetween} gap-[20px] bg-[#f9fafc] text-[14px] font-bold w-[100%] md:w-[50%] py-[16px] px-[30px] my-[65px] mx-auto rounded-full  cursor-pointer`}
    >
      <span className="prev text-[#787878]">السابق</span>
      <div className={`numbers ${styles.flexBetween} gap-[30px]`}>
        <span className="active text-[var(--main-color)]">1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
      </div>
      <span className="next text-[#787878]">التالي</span>
    </div>
    // END TAP COMPONENT
  );
};

export default Tap;
