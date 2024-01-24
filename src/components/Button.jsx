import PropTypes from "prop-types";

export default function Button({ text, primary, handleClick }) {
  return (
    <button
      onClick={handleClick}
      className={`text-[#FEF7EE] ${primary && "bg-[#6F757C]"}  p-2 rounded-md mx-1 my-8`}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  primary: PropTypes.bool,
  handleClick: PropTypes.func,
};
