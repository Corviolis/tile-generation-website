import StyledButton from "@/app/components/styledButton";
import TileContainer from "@/app/components/tileContainer";
import {exportRulesAsJson, importRulesFromJson, importSpriteSheet} from "@/app/utils/importFunctions";
import React from "react";
import {userAppStore} from "@/app/utils/store";


export function LeftPanel() {
    return (
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
            2xl:min-w-[720px]">
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
            <TileContainer/>
            </div>
    );
}

async function addTiles() {
    let tiles = await importSpriteSheet();
    if (tiles == undefined) return;
    userAppStore.getState().setTileContainerItems(tiles);
}