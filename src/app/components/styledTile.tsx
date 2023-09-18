'use client';

import {userAppStore} from "@/app/utils/store";
import React from "react";
import Image from 'next/image'
import {clickTileImage} from "@/app/utils/tileFunctions";
import {createDropTileWithRules} from "@/app/utils/ruleFuncitons";

interface TileProps {
    id: string;
    src: string;
}

export default function StyledTile({ id, src }:TileProps) {
    const {dropTileContainerItems, setDropTileContainerItems, tileContainerItems, setTileContainerItems, setSelectedTile} = userAppStore();

    return (
        <Image 
        id={id}
        src={src}
        width={25}
        height={25}
        alt="Tilemap Tile"
        onClick={(event) => {
            if (event.ctrlKey) {
                const tile = createDropTileWithRules(id.split("-")[1], src);
                if (tile == null) return;

                dropTileContainerItems.push(tile);
                setDropTileContainerItems(dropTileContainerItems);
            } else {
                clickTileImage(id, src);
                setSelectedTile(id.split("-")[1]);
            }
        }}
        onDragStart={(event) => drag(event, id, src)}
        onDragOver={(event) => event.preventDefault()}
        onDrop={(event) => {
            const ownId = id.split("-")[1];
            const data =  event.dataTransfer.getData("text").split("~");
            if (data[0] === ownId) return;

            let indexD = 0
            let droppedFolder: React.JSX.Element[] = [];
            for (let i = 0; i < tileContainerItems.length; i++) {
                droppedFolder = tileContainerItems[i].filter((tile) => tile.key === data[0]);
                if (droppedFolder.length) {
                    indexD = i;
                    break;
                }
            }

            let originalFolder;
            for (let i = 0; i < tileContainerItems.length; i++) {
                originalFolder = tileContainerItems[i].filter((tile) => tile.key === ownId);
                if (originalFolder.length) {
                    droppedFolder.forEach(item => {
                        originalFolder.push(item);
                    })
                    break;
                }
            }

            tileContainerItems.splice(indexD, 1);
            setTileContainerItems(tileContainerItems);
        }}
        draggable={true}
        className="
        w-full
        tile
        transition-[border-width]
        duration-[35ms]
        hover:border-4
        border-orange-500
        active:duration-0
        active:border-0
        from-[#fb923c2a]
        to-[#693cfb2a]
        bg-gradient-to-b
        select-none
        "
        />
    )
}

function drag(event: React.DragEvent<HTMLImageElement>, id: string, src: string) {
    if (event.dataTransfer == null) return;
    event.dataTransfer.setData("text", id.split("-")[1] + "~" + src);
}