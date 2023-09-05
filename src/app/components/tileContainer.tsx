import React from "react";
import {userAppStore} from "@/app/utils/store";


export default function TileContainer() {
    const tiles = userAppStore(state => state.tileContainerItems);

    return (
        <div className="grid w-full grid-cols-6 gap-2 overflow-y-auto">
          {tiles.map((item) => {
            return item;
          })}
        </div>
    );
}