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
          tiles.push(tileCanvas);
        }
    }

    return tiles;
}

export function displayTilesOnPage(rules: {}, tiles: HTMLCanvasElement[]) {
    console.log(tiles);

    const container = document.getElementById('tiles-container');
    if (container == null) return;
    container.innerHTML = '';

    const keys = Object.keys(rules)

    return (
        tiles.forEach((tileCanvas, index) => {
            <StyledTile 
            id={"tile-" + keys[index]}
            src={tileCanvas.toDataURL()}
            onClick={clickTile}
            onDragStart={drag}/>
        })
    )
}

function clickTile() {
    alert('test');
}

function drag() {
    alert('test');
}