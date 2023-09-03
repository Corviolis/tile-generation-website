"use client";

import StyledButton from "./styledComponents/styledButton";
import {exportRulesAsJson, importRulesFromJson, importSpriteSheet} from "@/app/utils/importFunctions";
import {useState} from 'react';
import {clickGrid} from "@/app/utils/menuFunctions";

export default function Home() {

  const tileArray: any[] = [];
  const [tiles, setTiles] = useState(tileArray);
  const [dropZoneTiles, setDropZoneTiles] = useState(tileArray);
  const [rules, setRules] = useState({});
  const [selectedDir, setSelectedDir] = useState("");
  const [selectedTile, setSelectedTile] = useState("");

  async function addTiles() {
    const tilesList = await importSpriteSheet();
    if (tilesList == undefined) return;

    setTiles(tilesList);
  }

  async function importRules() {
    let newRules = await importRulesFromJson(rules);
    if (newRules == undefined) return;

    setRules(newRules);
  }

  async function exportRules() {
    await exportRulesAsJson(rules);
  }

  interface PanelProps {
  id: string;
  onClick: (id: string) => void;
}

  function Panel({ id, onClick }:PanelProps) {
    return (
      <div className="outer-tile w-[100px] h-[100px] bg-white border-2 border-[#ccc]" id={id} onClick={() => {onClick(id)}}></div>
    )
  }

  return (
    <main className="flex flex-row h-screen">
      <div className="bg-[#efebff] max-h-full p-5 flex flex-col w-[400px] lg:min-w-[500px] xl:min-w-[600px] 2xl:min-w-[700px]">
        <h1 className="text-5xl mb-5 font-bold">WFC Rule Builder v1.0</h1>
        <div className="flex flex-row flex-wrap font-mono">
          <div className="rounded-lg p-4 bg-slate-500 space-x-4 shadow-xl w-fit flex flex-row mr-2 mb-2">
            <StyledButton title="Import Sprite Sheet" onClick={addTiles} />
            <input
              type="number"
              id="tilesize-input"
              placeholder="16"
              className="w-16 rounded-md text-center appearance-none"
            />
          </div>

          <div className="rounded-lg p-4 bg-slate-500 space-x-4 shadow-xl w-fit flex flex-row mb-2">
            <StyledButton title="Import Rules" onClick={importRules} />
            <StyledButton title="Export Rules" onClick={exportRules} />
          </div>
        </div>
        <div className="grid w-full grid-cols-6 gap-2 overflow-y-auto">
          {tiles.map((item) => {
            return item;
          })}
        </div>
      </div>
      <div className="bg-neutral-400 w-full min-h-screen flex flex-col items-center justify-center gap-y-10">
        <div className="grid grid-cols-3 grid-rows-3 mt-[20px] gap-0">
          <Panel id="ul" onClick={clickGrid}/>
          <Panel id="u" onClick={clickGrid}/>
          <Panel id="ur" onClick={clickGrid}/>
          <Panel id="l" onClick={clickGrid}/>
          <div id="selected-tile" className="bg-gray-200 border-[#ccc] border-2 bg-no-repeat bg-cover tile"/>
          <Panel id="r" onClick={clickGrid}/>
          <Panel id="dl" onClick={clickGrid}/>
          <Panel id="d" onClick={clickGrid}/>
          <Panel id="dr" onClick={clickGrid}/>
        </div>

        <div
          className="xl:w-[611px] lg:w-[500px] min-h-[100px] w-[400px] h-fit flex flex-row content-start bg-white gap-2 p-[20px]"
          onDrop={() => {
          }}
          onDragOver={() => {}}
        >
           {dropZoneTiles.map((item) => {
            return item;
          })}
        </div>
      </div>
    </main>
  );
}