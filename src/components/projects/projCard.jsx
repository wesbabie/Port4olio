import React from "react";

export default function projCard(props){
    return(
        <>
            <div className="card border rounded-3xl single_card transition ease-in-out delay-300  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...">
            <h3 className="text-xl">{props.title}</h3>
            <p className=" text-base leading-6 antialiased antialiased antialiased hover:subpixel-antialiased">{props.content}</p>
            <span className="text-2xl">
                <i className={props.tool_one}></i>
                <i className={props.tool_two}></i>
                <i className={props.tool_three}></i>
                <a href={props.tool_four}><i className="fa-brands fa-github"></i></a>
                <a href={props.tool_five}><i className="fa-solid fa-link"></i></a>
            </span>
            </div>
        </>
    )
}