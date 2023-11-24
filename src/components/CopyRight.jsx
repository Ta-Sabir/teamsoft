const CopyRight = () => {
  return (
    // START COPY RIGHT COMPONENT
    <div className="copyright bg-[#f9fafc] p-[14px] cursor-pointer">
      <p className="text-[12px] font-bold  md:text-[17px] md:font-normal text-center">
        <span className="text-[var(--main-color)]">موقع تيم سوفت</span> جميع
        الحقوق محفوظة لـ
        <a
          href="http://localhost:5173/eroor"
          className="text-[var(--main-color)] mr-[5px]"
        >
          Saber.Ai
        </a>
        <bdi className="mr-[5px]"> 2023 © </bdi>
      </p>
    </div>

    // END COPY RIGHT COMPONENT
  );
};

export default CopyRight;
