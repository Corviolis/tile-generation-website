import {userAppStore} from "@/app/utils/store";
import DroppedTile from "@/app/components/droppedTile";
import React from "react";

export function clearSelectedDirection() {
    const outerTiles = document.querySelectorAll(".outer-tile");
    //const dropZone = document.getElementById("drop-zone");
    outerTiles.forEach((tile, index) => {
        let t = tile as HTMLElement;
        t.style.backgroundColor = "";
    });
    //dropZone.innerHTML = "";
    //selected_dir = "";
}

export function loadDropTiles() {
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
            key={"drop-" + id}/>
        );
    });

    return tiles;
}