'use client';

import {userAppStore} from "@/app/utils/store";
import {clearSelectedDirection} from "@/app/utils/menuFunctions";
import React from "react";

interface TileProps {
    id: string;
    src: string;
    draggable: boolean;
}

export default function StyledTile({ id, src, draggable }:TileProps) {
    const setSelectedTile = userAppStore((state) => state.setSelectedTile);

    return (
        <img 
        id={id}
        src={src}
        onClick={() => {clickTile(id, src); setSelectedTile(id.split("-")[1])}}
        onDragStart={(event) => drag(event, id, src)}
        draggable={draggable}
        className="
        w-full
        tile"
        />
    )
}

function clickTile(id: string, src: string) {
    clearSelectedDirection();
    let tile= document.getElementById("selected-tile");
    if (tile == null) return;

    tile.style.backgroundImage = "url(" + src + ")";
}

function drag(event: React.DragEvent<HTMLImageElement>, id: string, src: string) {
    if (event.dataTransfer == null) return;
    event.dataTransfer.setData("text", id.split("-")[1] + "~" + src);
}