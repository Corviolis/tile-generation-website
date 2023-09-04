import {breakImageIntoTiles} from "@/app/utils/tileFunctions"
import _ from "lodash";
import {userAppStore} from "@/app/utils/store";

function waitForImage(elem: HTMLImageElement) {
    return new Promise((res, rej) => {
        if (elem.complete) return res(elem);
        elem.onload = () => res(elem);
        elem.onerror = () => rej(elem);
    });
}

function waitForReader(elem: FileReader) {
    return new Promise((res, rej) => {
        if (elem.result != null) return res(elem);
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

    const image = new Image();
    image.src = reader.result as string;
    await waitForImage(image);

    let tileSizeInput = document.getElementById("tilesize-input") as HTMLInputElement;
    let tileSize = 16;
    if (tileSizeInput != null) tileSize = tileSizeInput.valueAsNumber;

    return breakImageIntoTiles(image, tileSize);
}

export async function importRulesFromJson() {
    const rules = userAppStore.getState().rules;
    const input = document.createElement('input');
    input.type = 'file';
    input.click();
    await waitForInput(input);
    if (input.files == null) return;

    const reader = new FileReader();
    reader.readAsDataURL(input.files[0]);
    await waitForReader(reader);
    if (reader.result == null) return;

    if (reader.result instanceof ArrayBuffer) return;

    const newRules = _.merge(rules, JSON.parse(atob(reader.result.replace("data:application/json;base64,", ""))));
    userAppStore.getState().setRules(newRules);
}

export async function exportRulesAsJson() {
    const rules = userAppStore.getState().rules;
    const cRules = JSON.parse(JSON.stringify(rules));

    // Optimize json - Kinda jank, probably should rewrite
    Object.keys(rules).forEach((key, _) => {
        // @ts-ignore
        Object.keys(rules[key]).forEach((sub_key, _) => {
            // @ts-ignore
            if (rules[key][sub_key].length === 0) delete cRules[key][sub_key];
        })

        if (Object.keys(cRules[key]).length === 0) delete cRules[key];
    });

    const jsonText = JSON.stringify(cRules, null, 2);
    const blob = new Blob([jsonText], {type: 'text/plain'});
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'rules.json';
    a.style.display = 'none';
    a.click();
}