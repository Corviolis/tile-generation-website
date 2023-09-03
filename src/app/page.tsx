"use client";

import StyledButton from "./styledComponents/styledButton";
import {exportRulesAsJson, importRulesFromJson, importSpriteSheet} from "@/app/utils/importFunctions";
import StyledTile from './styledComponents/styledTile';
import { useState } from 'react';

export default function Home() {

  const tileArray: any[] = [];
  const [tiles, setTiles] = useState(tileArray);
  const [rules, setRules] = useState({});

  async function addTiles() {
    const tilesList = await importSpriteSheet();
    if (tilesList == undefined) return;

    setTiles(tiles.concat(tilesList));
  }

  async function importRules() {
    let newRules = await importRulesFromJson(rules);
    if (newRules == undefined) return;

    setRules(newRules);
  }

  async function exportRules() {
    await exportRulesAsJson(rules);
  }

  return (
    <main className="flex flex-row h-screen">
      <div className="bg-[#efebff] max-h-full p-5 flex flex-col">
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
        <div className="grid w-full grid-cols-6 gap-2 overflow-y-auto">
          {tiles.map((item) => {return(item)})}
        </div>
      </div>
      <div className="bg-neutral-400 min-h-screen">
        <div id="menu">
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
                
            </div>
      </div>
    </main>
  );
}
