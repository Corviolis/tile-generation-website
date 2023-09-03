import {breakImageIntoTiles, displayTilesOnPage} from "@/app/utils/imageFunctions"
import _ from "lodash";
import {rules} from "@/app/utils/state";

function waitForImage(elem: HTMLImageElement) {
    return new Promise((res, rej) => {
        if (elem.complete) {
            return res(elem);
        }
        elem.onload = () => res(elem);
        elem.onerror = () => rej(elem);
    });
}

function waitForReader(elem: FileReader) {
    return new Promise((res, rej) => {
        elem.onload = () => res(elem);
        elem.onerror = () => rej(elem);
    });
}

function waitForInput(elem: HTMLInputElement) {
    return new Promise((res, rej) => {
        elem.onchange = () => res(elem);
        elem.onerror = () => rej(elem);
    });
}

export async function importSpriteSheet() {
    const input = document.createElement('input');
    input.type = 'file';
    input.click();

    await waitForInput(input);
    if (input.files == null) return;

    const reader: FileReader = new FileReader();
    reader.readAsDataURL(input.files[0]);
    await waitForReader(reader);

    //if (readerEvent.target == null) return;

    const image = new Image();
    image.src = reader.result as string;
    await waitForImage(image);

    //let tileSizeInput = document.getElementById("tilesize-input") as HTMLInputElement;
    let tileSize = 16;
    //if (tileSizeInput == null) tileSize = 16;
    //else tileSize = tileSizeInput.valueAsNumber;

    let newRules: any = {}
    for (let y = 0; y < image.height / tileSize; y++) {
        for (let x = 0; x < image.width / tileSize; x++) {
            newRules[x + ":" + y] = {
                "r": [],
                "l": [],
                "u": [],
                "d": [],
                "ur": [],
                "ul": [],
                "dr": [],
                "dl": []
            }
        }
    }
    _.merge(rules, newRules);

    const tiles = breakImageIntoTiles(image, tileSize);
    if (tiles == undefined) return;

    return displayTilesOnPage(rules, tiles);
}