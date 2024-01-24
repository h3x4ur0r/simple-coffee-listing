import PropTypes from "prop-types";
import Button from "./Button";
import Card from "./Card";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

export default function Container() {
  const [data, setData] = useState([]);
  const [all, setAll] = useState(true);

  const DisplayAll = () => (
    <>
      {" "}
      {data.map((item) => (
        <Card key={nanoid()} item={item} />
      ))}{" "}
    </>
  );
  const DisplayAvailable = () => (
    <>
      {data
        .filter((item) => item.available)
        .map((item) => (
          <Card item={item} key={nanoid()} />
        ))}
    </>
  );
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json",
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function handleAll() {
    setAll(true);
  }

  function handleAvailable() {
    setAll(false);
  }

  return (
    <div
      className={
        "bg-[#1B1D1F] font-semibold max-w-md text-center relative mt-20 p-8 z-10 overflow-hidden rounded-lg md:max-w-2xl md:px-12 xl:max-w-5xl"
      }
    >
      <img
        src="src\assets\vector.svg"
        alt=""
        className="absolute -right-16 -z-10 md:right-20 xl:right-52"
      />
      <h1 className="text-[#FEF7EE] text-[2rem] mt-12 mb-2">Our Collection</h1>
      <p className="text-[#6F757C] mx-auto xl:max-w-xl">
        Introducing our Coffee Collection, a selection of unique coffees from
        different roast types and origins, expertly roasted in small batches and
        shipped fresh weekly.
      </p>
      <Button text="All Products" handleClick={handleAll} primary={all} />
      <Button
        text="Available Now"
        handleClick={handleAvailable}
        primary={!all}
      />
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-0 xl:grid-cols-3 xl:gap-8">
        {all ? <DisplayAll /> : <DisplayAvailable />}
      </div>
    </div>
  );
}

Container.propTypes = {
  styles: PropTypes.string,
};
