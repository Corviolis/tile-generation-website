import React from "react";
import {userAppStore} from "@/app/utils/store";
import {createDropTileWithRules} from "@/app/utils/ruleFuncitons";

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
              const data =  event.dataTransfer.getData("text").split("~");

              const newTile = createDropTileWithRules(data[0], data[1]);
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