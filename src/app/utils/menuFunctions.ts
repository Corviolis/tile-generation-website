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