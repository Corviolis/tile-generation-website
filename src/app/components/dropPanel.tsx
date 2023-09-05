import React from "react";
import {userAppStore} from "@/app/utils/store";
import DroppedTile from "@/app/components/droppedTile";

export function DropPanel() {
    const {dropTileContainerItems, setDropTileContainerItems} = userAppStore();

    return (
        <div
          className="xl:w-[580px]
          lg:w-[480px]
          w-[425px]
          min-h-[100px]
          h-fit
          grid
          grid-cols-6
          place-items-center
          content-evenly
          bg-orange-100
          border-2
          border-[#AD5B18]
          shadow-2xl
          gap-y-2
          p-[20px]"
          onDrop={(event) => {
              const newTile = drop(event);
              if (newTile == null) return;

              dropTileContainerItems.push(newTile);
              setDropTileContainerItems(dropTileContainerItems);
          }}
          onDragOver={(event) => event.preventDefault()}
        >
          {dropTileContainerItems.map((item) => {
            return item;
          })}
        </div>
    );
}

function addRule(rules: {[key: string]: {[key: string]: string[]}}, rule: string, tile: string, dir: string) {
    if (!rules.hasOwnProperty(tile)) rules[tile] = {};
    if (!rules[tile].hasOwnProperty(dir)) rules[tile][dir] = [];
    rules[tile][dir].push(rule);
}

export function drop(event: React.DragEvent<HTMLDivElement>): React.JSX.Element | null {
    const selectedTile = userAppStore.getState().selectedTile;
    const selectedDir = userAppStore.getState().selectedDir;
    const rules = userAppStore.getState().rules;
    const tiles = userAppStore.getState().dropTileContainerItems;
    if (selectedDir === "" || selectedTile === "" || event.dataTransfer == null) return null;

    //event.preventDefault();
    const imageElement = new Image();
    const data =  event.dataTransfer.getData("text").split("~");
    if (document.getElementById("drop-" + data[0]) != null) return null;

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
        <DroppedTile
            id={"drop-" + data[0]}
            src={data[1]}
            key={"drop-" + data[0]}
        />
    );
}