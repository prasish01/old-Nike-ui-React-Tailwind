/* eslint-disable react/prop-types */
function Button({
  children,
  iconUrl,
  backgroundColor,
  textColor,
  borderColor,
}) {
  return (
    <button
      className={`btn-primary ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "bg-coral-red text-white border-coral-red ;"
      }`}
    >
      {children}
      {iconUrl && (
        <img src={iconUrl} alt="" className="ml-2 rounded-full w-5 h-5" />
      )}
    </button>
  );
}

export default Button;
