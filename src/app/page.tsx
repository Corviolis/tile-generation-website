"use client";

import StyledButton from "@/app/components/styledButton";
import {exportRulesAsJson, importRulesFromJson, importSpriteSheet} from "@/app/utils/importFunctions";
import {drop} from '@/app/utils/tileFunctions';
import React, {useState} from 'react';
import {Panel} from "@/app/components/Panel";
import InfoPanel from "./components/infoPane";

export default function Home() {

  const tileArray: any[] = [];
  const [tiles, setTiles] = useState(tileArray);
  const [dropZoneTiles, setDropZoneTiles] = useState(tileArray);

  async function addTiles() {
    const tilesList = await importSpriteSheet();
    if (tilesList == undefined) return;

    setTiles(tilesList);
  }

  async function addDropTiles(event: React.DragEvent<HTMLDivElement>) {
    const t= dropZoneTiles;
    t.push(drop(event));
    console.log(t);

    setDropZoneTiles(t);
    setTiles(tiles.concat([]));
  }

  return (
    <main className="flex flex-row h-screen">

      {/* Left Pane */}
      <div className="
      from-[#2f3b51]
      to-black
      bg-gradient-to-b
      max-h-full
      p-5
      flex
      flex-col
      w-[400px]
      lg:min-w-[500px]
      xl:min-w-[600px]
      2xl:min-w-[700px]">
        <h1 className="text-5xl mb-5 font-bold text-[#FFA357]">WFC Rule Builder v1.0</h1>
        <div className="flex flex-row flex-wrap font-mono">
          <div className="rounded-lg p-4 bg-[#AD5B18] space-x-4 shadow-xl w-fit flex flex-row mr-2 mb-2">
            <StyledButton title="Import Sprite Sheet" onClick={addTiles} />
            <input
              type="number"
              id="tilesize-input"
              placeholder="16"
              className="w-16 rounded-md text-center appearance-none"
              defaultValue="16"
            />
          </div>
          <div className="rounded-lg p-4 bg-[#AD5B18] space-x-4 shadow-xl w-fit flex flex-row mb-2">
            <StyledButton title="Import Rules" onClick={importRulesFromJson} />
            <StyledButton title="Export Rules" onClick={exportRulesAsJson} />
          </div>
        </div>
        <div className="grid w-full grid-cols-6 gap-2 overflow-y-auto">
          {tiles.map((item) => {
            return item;
          })}
        </div>
      </div>

      {/* Right Pane */}
      <div className="bg-neutral-400 w-full min-h-screen flex flex-col items-center justify-center gap-y-10 relative">
        <div className="grid grid-cols-3 grid-rows-3 mt-[20px] gap-0 border-2 border-[#AD5B18] shadow-2xl from-[#fb923ca0] to-[#693cfb9c] bg-gradient-to-b">
          <Panel id="ul" />
          <Panel id="u" />
          <Panel id="ur" />
          <Panel id="l" />
          <div id="selected-tile" className="border-2 border-[#AD5B18] bg-no-repeat bg-cover tile"/>
          <Panel id="r" />
          <Panel id="dl" />
          <Panel id="d" />
          <Panel id="dr" />
        </div>
        <div
          className="xl:w-[580px]
          lg:w-[480px]
          w-[425px]
          min-h-[100px]
          h-fit
          grid
          grid-cols-6
          place-items-center
          content-evenly
          bg-orange-100
          border-2
          border-[#AD5B18]
          shadow-2xl
          gap-y-2
          p-[20px]"
          onDrop={addDropTiles}
          onDragOver={(event) => event.preventDefault()}
        >
          {dropZoneTiles.map((item) => {
            return item;
          })}
        </div>
        <InfoPanel />
      </div>
    </main>
  );
}