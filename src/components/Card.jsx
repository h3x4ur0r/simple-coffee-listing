import PropTypes from "prop-types";
import BlankStar from "../assets/Star.svg";
import FilledStar from "../assets/Star_fill.svg";

export default function Card({ item }) {
  return (
    <div className="max-w-72 mx-auto relative md:mb-16">
      {item.popular ? (
        <span className="bg-[#F6C768] text-[10px] px-3 py-1 top-2 left-2 rounded-xl absolute">
          Popular
        </span>
      ) : (
        ""
      )}
      <img
        src={item.image}
        alt=""
        className="mx-auto rounded-xl hover:cursor-pointer"
      />
      <div className="flex justify-between my-3">
        <h1 className="text-[#FEF7EE]">{item.name}</h1>
        <span className="text-xs font-bold bg-[#BEE3CC] px-2 py-1 rounded-md">
          {item.price}
        </span>
      </div>
      <div className="flex justify-between items-center">
        <div className="align-middle text-sm">
          {item.rating ? (
            <img src={FilledStar} alt="" className="inline align-bottom" />
          ) : (
            <img src={BlankStar} alt="" className="inline align-bottom" />
          )}
          <span className="text-[#FEF7EE] ml-1">
            {item.rating || "No ratings"}{" "}
          </span>
          <span className="text-[#6F757C]">
            {item.votes ? `(${item.votes} votes)` : ""}
          </span>
        </div>
        {!item.available ? (
          <span className="text-[#ED735D] text-sm mt-2 block">Sold Out</span>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

Card.propTypes = {
  item: PropTypes.object,
};
