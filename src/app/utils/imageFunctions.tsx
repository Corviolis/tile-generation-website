import { JSX, SetStateAction } from 'react';
import StyledTile from '../styledComponents/styledTile';

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

/*export function displayTilesOnPage(rules: {}, tiles: HTMLCanvasElement[]) {
    const keys = Object.keys(rules)
    var tilesList: any[] = [];
    
    tiles.forEach((tileCanvas, index) => {
        tilesList.push(
            <StyledTile 
            id={"tile-" + keys[index]}
            src={tileCanvas.toDataURL()}
            onClick={clickTile}
            onDragStart={drag}
            key={index}/>
        );
    })
    
    return tilesList;
}*/

function clickTile() {
    alert('test');
}

function drag() {
    alert('test');
}