import { userAppStore } from "@/app/utils/store";
import {clearSelectedDirectionHighlight} from "@/app/components/rightPanel";
import DroppedTile from "@/app/components/droppedTile";
import React from "react";

interface PanelProps {
  id: string;
}

export function Panel({ id }: PanelProps) {
    const {selectedTile, setSelectedDir, setDropTileContainerItems} = userAppStore();

    return (
        <div
            className="
            outer-tile
            w-[100px]
            h-[100px]
            bg-orange-100
            hover:bg-orange-200
            transition-colors
            border-[1px]
            border-[#AD5B18]"
            id={id}
            onClick={() => {
            if (selectedTile == "") return;
                clickPanel(id);
                setSelectedDir(id);
                setDropTileContainerItems(loadDropTiles());
            }}
        ></div>
    );
}

export function clickPanel(id: string) {
  clearSelectedDirectionHighlight();
  let tile = document.getElementById(id);
  if (tile == null) return;

  tile.style.backgroundColor = "#FB923C";
}

function loadDropTiles() {
    let selectedTile = userAppStore.getState().selectedTile;
    let selectedDir = userAppStore.getState().selectedDir;
    let rules = userAppStore.getState().rules;

    const tiles: any[] = [];
    if (!rules.hasOwnProperty(selectedTile) || !rules[selectedTile].hasOwnProperty(selectedDir)) return tiles;

    rules[selectedTile][selectedDir].forEach((id, index) => {
        const img = document.getElementById("tile-" + id) as HTMLImageElement;
        if (img == null) return;

        tiles.push(
          <DroppedTile
            id={"drop-" + id}
            src={img.src}
            key={id}/>
        );
    });

    return tiles;
}