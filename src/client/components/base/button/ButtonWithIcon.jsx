
const ButtonWithIcon = ({
  title = "",
  onClick = () => {},
  buttonType = "dark",
  route = "#",
}) => {
  const style = {
    dark: {
      base: "bg-[#292929]",
      text: "text-white",
    },
  };
  return (
    <button
      onClick={onClick}
      className={`flex rounded-2xl w-full ${style?.[buttonType]?.base}`}
    >
      <div
        className={`${style?.[buttonType]?.text} p-3 items-center justify-center w-full`}
      >
        {title}
      </div>
    </button>
  );
};

export default ButtonWithIcon;
