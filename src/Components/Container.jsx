import React from "react";

const Container = (props) => {
  return (
    <div className="flex justify-center flex-wrap p-2 w-64 m-4 bg-slate-400 rounded-xl">
      <div className="flex flex-wrap">
        <img
          src={props.img}
          alt=""
          width={200}
          height={300}
          className="rounded-xl"
        />
        <h1 className="text-2xl font-sans font-bold w-full text-pink-950">
          {props.title}
        </h1>
        <h2 className="text-md font-mono w-full text-blue-800">{props.year}</h2>
      </div>
    </div>
  );
};

export default Container;
