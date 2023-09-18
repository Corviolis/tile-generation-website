import React from "react";
import {userAppStore} from "@/app/utils/store";


export default function TileContainer() {
    const {tileContainerItems} = userAppStore();

    return (
        <div className="grid w-full grid-cols-6 gap-2 overflow-y-auto">
          {tileContainerItems.map((item) => {
            return item[0];
          })}
        </div>
    );
}