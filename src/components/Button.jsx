const Button = (props) => {
  return (
    // START BUTTON COMPONENT
    <button
      className={`bg-[${props.bg}] text-[${props.text}] w-[${props.width}] py-[12px] px-[18px] border-[1.5px] border-[(var(--third-color))] rounded-full text-[14px] font-semibold`}
    >
      {props.children}
    </button>
    // END BUTTON COMPONENT
  );
};

export default Button;
