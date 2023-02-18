/* eslint-disable jsx-a11y/alt-text */
import React from "react";

export default function Hero(){
    return(
        <>
            <div className="hero">
                <div className="text-3xl leading-normal ">
                    <h1>Hello!</h1>
                    <h1>I am <b>Odunayo Fatunsi</b></h1>
                    <h1>and I am <b>Web developer</b></h1>
                    <h1>I am also a <b>Computer Scientist</b></h1>
                </div>

                <img src={require("../images/about-us.png")} alt="boy" width={500} height={500}/>
            </div>
        </>
    )
}