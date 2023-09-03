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

export function clickGrid(id: string) {
    clearSelectedDirection();
    let tile= document.getElementById(id);
    if (tile == null) return;

    tile.style.backgroundColor = "#FB923C";
}