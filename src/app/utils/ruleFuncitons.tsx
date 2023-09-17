import {userAppStore} from "@/app/utils/store";
import DroppedTile from "@/app/components/droppedTile";
import React from "react";

function removeRule(rules: {[key: string]: {[key: string]: string[]}}, id: string, tile: string, direction: string) {
    const index = rules[tile][direction].indexOf(id);
    if (index > -1) rules[tile][direction].splice(index, 1)

    if (!Object.keys(rules[tile][direction]).length) Reflect.deleteProperty(rules[tile], direction);
    if (!Object.keys(rules[tile]).length) Reflect.deleteProperty(rules, tile);
}

function addRule(rules: {[key: string]: {[key: string]: string[]}}, rule: string, tile: string, direction: string) {
    if (!rules.hasOwnProperty(tile)) rules[tile] = {};
    if (!rules[tile].hasOwnProperty(direction)) rules[tile][direction] = [];
    rules[tile][direction].push(rule);
}

export function createDropTileWithRules(id: string, src: string) {
    const selectedTile = userAppStore.getState().selectedTile;
    const selectedDir = userAppStore.getState().selectedDir;
    const rules = userAppStore.getState().rules;
    if (selectedDir === "" || selectedTile === "") return null;

    if (document.getElementById("drop-" + id) != null) return null;

    addRule(rules, id, selectedTile, selectedDir);
    switch (selectedDir) {
        case "r": {
            addRule(rules, selectedTile, id, "l");
            break;
        }
        case "l": {
            addRule(rules, selectedTile, id, "r");
            break;
        }
        case "u": {
            addRule(rules, selectedTile, id, "d");
            break;
        }
        case "d": {
            addRule(rules, selectedTile, id, "u");
            break;
        }
        case "ur": {
            addRule(rules, selectedTile, id, "dl");
            break;
        }
        case "ul": {
            addRule(rules, selectedTile, id, "dr");
            break;
        }
        case "dr": {
            addRule(rules, selectedTile, id, "ul");
            break;
        }
        case "dl": {
            addRule(rules, selectedTile, id, "ur");
            break;
        }
    }

    return (
        <DroppedTile
            id={"drop-" + id}
            src={src}
            key={id}
        />
    );
}

export function deleteRule(id: string) {
    const selectedTile = userAppStore.getState().selectedTile;
    const selectedDir = userAppStore.getState().selectedDir;
    const rules = userAppStore.getState().rules;

    removeRule(rules, id, selectedTile, selectedDir);
    switch (selectedDir) {
        case "r": {
            removeRule(rules, selectedTile, id, "l");
            break;
        }
        case "l": {
            removeRule(rules, selectedTile, id, "r");
            break;
        }
        case "u": {
            removeRule(rules, selectedTile, id, "d");
            break;
        }
        case "d": {
            removeRule(rules, selectedTile, id, "u");
            break;
        }
        case "ur": {
            removeRule(rules, selectedTile, id, "dl");
            break;
        }
        case "ul": {
            removeRule(rules, selectedTile, id, "dr");
            break;
        }
        case "dr": {
            removeRule(rules, selectedTile, id, "ul");
            break;
        }
        case "dl": {
            removeRule(rules, selectedTile, id, "ur");
            break;
        }
    }
}