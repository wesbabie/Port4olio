import React from "react";
import ProjCard from "./projCard";
import proj from "./content";
export default function Project(){
    function createEntry(cardTerm){
        return(
            <ProjCard
                key = {cardTerm.id}
                title = {cardTerm.title}
                content = {cardTerm.content}
                tool_one = {cardTerm.tool_one}
                tool_two = {cardTerm.tool_two}
                tool_three = {cardTerm.tool_three}
                tool_four = {cardTerm.tool_four}
                tool_five = {cardTerm.tool_five}

            />
        )
    }
    return(
        <>
            <div className="project">
                <h1 className="text-4xl">Projects</h1>

                <div className="card_container">
                    {proj.map(createEntry)}
                </div>
            </div>
        </>
    )
}
