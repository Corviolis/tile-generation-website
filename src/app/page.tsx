"use client";

import StyledButton from "./styledComponents/styledButton";
import { importSpriteSheet } from "@/app/utils/importFunctions";
import StyledTile from './styledComponents/styledTile'; 
import { useState } from 'react'; 

function importRules() {
}
function exportRules() {
}

export default function Home() {

  const [tiles, setTiles] = useState([]);

  function addTiles() {
    console.log("list" + importSpriteSheet());
    //setTiles(importSpriteSheet)
  }

  return (
    <main className="flex md:flex-row flex-col min-h-screen">
      <div className="bg-[#efebff] md:min-h-screen p-5">
        <h1 className="text-5xl mb-5 font-bold">WFC Rule Builder v1.0</h1>
        <div className="flex flex-row flex-wrap font-mono">
          
          <div className="rounded-lg p-4 bg-slate-500 space-x-4 shadow-xl w-fit flex flex-row mr-2 mb-2">
            <StyledButton
              title="Import Sprite Sheet"
              onClick={addTiles}
            />
            <input
              type="number"
              id="tilesize-input"
              placeholder="16"
              className="w-16 rounded-md text-center appearance-none"
            />
          </div>

          <div className="rounded-lg p-4 bg-slate-500 space-x-4 shadow-xl w-fit flex flex-row mb-2">
            <StyledButton
              title="Import Rules"
              onClick={importRules}
            />
            <StyledButton
              title="Export Rules"
              onClick={exportRules}
            />
          </div>
        </div>
        <div>
          {/* tiles here omegaLUL */}
        </div>
      </div>
      <div className="bg-neutral-400 md:min-h-screen min-h-full">
        {/* <div id="menu">
                <div id="sprite-container">
                  {}
                    <div className="outer-tile" id ="ul"></div>
                    <div className="outer-tile" id ="u"></div>
                    <div className="outer-tile" id ="ur"></div>
                    <div className="outer-tile" id ="l"></div>
                    <img className="middle-tile" id="selected-tile" src="data:image/svg+xml;charset=utf8,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%3E%3C/svg%3E"/>
                    <div className="outer-tile" id ="r"></div>
                    <div className="outer-tile" id ="dl"></div>
                    <div className="outer-tile" id ="d"></div>
                    <div className="outer-tile" id ="dr"></div>
                </div>

                <div id="drop-zone" onDrop="drop(event)" ondragover="allowDrop(event)">
                </div>
                
            </div> */}
      </div>
    </main>
  );
}
