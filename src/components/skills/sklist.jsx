import React from "react";

export default function Sklist(props) {
  return (
    <>
      <div className="border rounded-3xl single_card transition ease-in-out delay-300  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...">
        <div className="">
          <i className={props.logo}></i>
          <h3>{props.heading}</h3>
          <p>{props.body}</p>
        </div>
      </div>
    </>
  );
}
