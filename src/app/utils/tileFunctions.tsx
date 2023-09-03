import StyledTile from '../styledComponents/styledTile';
import {clearSelectedDirection} from "@/app/utils/menuFunctions";
import {DragEventHandler} from "react";

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
                onClick={clickTile}
                onDragStart={drag}
                key={key}/>
          );
        }
    }

    return tiles;
}

function clickTile(id: string, src: string) {
    clearSelectedDirection();
    let tile= document.getElementById("selected-tile");
    if (tile == null) return;

    tile.setAttribute("tile-id", id.split("-")[1]);
    tile.style.backgroundImage = "url(" + src + ")";
}

function drag() {}

/*function drag(event: DragEventHandler) {
    event.dataTransfer.setData("text", event.target.id.split("-")[1] + "~" + event.target.src);
}*/

/*
export function drop(event: DragEvent, rules: {}, selected_dir: string, selected_tile: string) {
    if (selected_dir === "" || selected_tile === "" || event.dataTransfer == null) return;

    event.preventDefault();
    const imageElement = new Image();
    const data =  event.dataTransfer.getData("text").split("~");
    if (document.getElementById("drop-" + data[0]) != null) return;

    imageElement.id = "drop-" + data[0];
    imageElement.src = data[1];
    imageElement.className = "dragged-image";
    imageElement.draggable = false;
    imageElement.setAttribute("onclick", "clickTile(this)");

    rules[selected_tile][selected_dir].push(data[0]);

    switch (selected_dir) {
        case "r": {
            rules[data[0]]["l"].push(selected_tile);
            break;
        }
        case "l": {
            rules[data[0]]["r"].push(selected_tile);
            break;
        }
        case "u": {
            rules[data[0]]["d"].push(selected_tile);
            break;
        }
        case "d": {
            rules[data[0]]["u"].push(selected_tile);
            break;
        }
        case "ur": {
            rules[data[0]]["dl"].push(selected_tile);
            break;
        }
        case "ul": {
            rules[data[0]]["dr"].push(selected_tile);
            break;
        }
        case "dr": {
            rules[data[0]]["ul"].push(selected_tile);
            break;
        }
        case "dl": {
            rules[data[0]]["ur"].push(selected_tile);
            break;
        }
    }

    return imageElement;
}*/
