import {Panel} from "@/app/components/panel";
import {DropPanel} from "@/app/components/dropPanel";
import InfoPanel from "@/app/components/infoPane";
import React from "react";

export function RightPanel() {
    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-center gap-y-10 relative">
        <div className="grid grid-cols-3 grid-rows-3 mt-[20px] gap-0 border-2 border-[#AD5B18] shadow-2xl from-[#fb923ca0] to-[#693cfb9c] bg-gradient-to-b">
            <Panel id="ul"/>
            <Panel id="u"/>
            <Panel id="ur"/>
            <Panel id="l"/>
            <div id="selected-tile" className="border-2 border-[#AD5B18] bg-no-repeat bg-cover tile"/>
            <Panel id="r"/>
            <Panel id="dl"/>
            <Panel id="d"/>
            <Panel id="dr"/>
        </div>
        <DropPanel />
        <InfoPanel />
      </div>
    );
}

export function clearSelectedDirectionHighlight() {
    const outerTiles = document.querySelectorAll(".outer-tile");
    outerTiles.forEach((tile, index) => {
        let t = tile as HTMLElement;
        t.style.backgroundColor = "";
    });
}