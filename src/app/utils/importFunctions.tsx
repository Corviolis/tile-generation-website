import {breakImageIntoTiles, displayTilesOnPage} from "@/app/utils/imageFunctions"
import _ from "lodash";
import {rules} from "@/app/utils/state";

export function importSpriteSheet() {
    const input = document.createElement('input');
    input.type = 'file';

    input.onchange = e=> {
        const reader: FileReader = new FileReader();
        if (e.target == null) return;
        const target = e.target as HTMLInputElement;
        if (target.files == null) return;

        reader.readAsDataURL(target.files[0]);
        reader.onload = readerEvent => {
            if (readerEvent.target == null) return;

            const image = new Image();
            image.src = readerEvent.target.result as string;
            image.onload = function() {

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

                const tiles= breakImageIntoTiles(image, tileSize);
                if (tiles == undefined) return;
                displayTilesOnPage(rules, tiles);
            }
        }
    }
    input.click();
}