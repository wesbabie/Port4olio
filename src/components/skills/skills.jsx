import React from "react";
import Sklist from "./sklist";
import skilz from './skillset'
export default function skills() {
    function createEntry(skillTerm){
        return(
            <Sklist
            key={skillTerm.id}
            logo={skillTerm.logo}
            heading={skillTerm.title}
            body={skillTerm.content}
        />
        )
    }
  return (
    <>
      <div className="skills" id="skills">
        <h1 className="text-4xl"> My Skillset</h1>

        <div className="skill_list">
          <p className="pee text-md">
            After embarking on few personal projects, i can say that i have
            perfected my skills in the following languages, frameworks and tools
          </p>

          <aside className="skill_card">
           {skilz.map(createEntry)}
          </aside>
        </div>
      </div>
    </>
  );
}
