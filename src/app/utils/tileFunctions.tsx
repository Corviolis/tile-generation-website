import StyledTile from '@/app/components/styledTile';
import {userAppStore} from "@/app/utils/store";
import React from "react";

export function breakImageIntoTiles(image: HTMLImageElement, tileSize: number) {
    // Create a canvas element to draw the image
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (ctx == null) return;

    canvas.width = image.width;
    canvas.height = image.height;
    ctx.drawImage(image, 0, 0);

    const tiles = [];
    for (let y = 0; y < canvas.height; y += tileSize) {
        for (let x = 0; x < canvas.width; x += tileSize) {
          // Create a new canvas for each tile
          const tileCanvas = document.createElement('canvas');
          const tileCtx = tileCanvas.getContext('2d');
          if (tileCtx == null) return;

          tileCanvas.width = tileSize;
          tileCanvas.height = tileSize;

          // Copy the portion of the image into the tile
          tileCtx.drawImage(canvas, x, y, tileSize, tileSize, 0, 0, tileSize, tileSize);

          let key = x / tileSize + ":" + y / tileSize;
          tiles.push(
              <StyledTile
                id={"tile-" + key}
                src={tileCanvas.toDataURL()}
                draggable={true}
                key={key}/>
          );
        }
    }

    return tiles;
}

function addRule(rules: {[key: string]: {[key: string]: string[]}}, rule: string, tile: string, dir: string) {
    if (!rules.hasOwnProperty(tile)) rules[tile] = {};
    if (!rules[tile].hasOwnProperty(dir)) rules[tile][dir] = [];
    rules[tile][dir].push(rule);
}

export function drop(event: React.DragEvent<HTMLDivElement>) {
    const selectedTile = userAppStore.getState().selectedTile;
    const selectedDir = userAppStore.getState().selectedDir;
    const rules = userAppStore.getState().rules;
    if (selectedDir === "" || selectedTile === "" || event.dataTransfer == null) return;

    event.preventDefault();
    const imageElement = new Image();
    const data =  event.dataTransfer.getData("text").split("~");
    if (document.getElementById("drop-" + data[0]) != null) return;

    addRule(rules, data[0], selectedTile, selectedDir);
    switch (selectedDir) {
        case "r": {
            addRule(rules, selectedTile, data[0], "l");
            break;
        }
        case "l": {
            addRule(rules, selectedTile, data[0], "r");
            break;
        }
        case "u": {
            addRule(rules, selectedTile, data[0], "d");
            break;
        }
        case "d": {
            addRule(rules, selectedTile, data[0], "u");
            break;
        }
        case "ur": {
            addRule(rules, selectedTile, data[0], "dl");
            break;
        }
        case "ul": {
            addRule(rules, selectedTile, data[0], "dr");
            break;
        }
        case "dr": {
            addRule(rules, selectedTile, data[0], "ul");
            break;
        }
        case "dl": {
            addRule(rules, selectedTile, data[0], "ur");
            break;
        }
    }

    return (
        <StyledTile
            id={"drop-" + data[0]}
            src={data[1]}
            draggable={false}/>
    );
}