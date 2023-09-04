'use client';

import {userAppStore} from "@/app/utils/store";
import {clearSelectedDirection} from "@/app/utils/menuFunctions";
import React from "react";
import Image from 'next/image'

interface TileProps {
    id: string;
    src: string;
    draggable: boolean;
}

export default function StyledTile({ id, src, draggable }:TileProps) {
    const setSelectedTile = userAppStore((state) => state.setSelectedTile);

    return (
        <Image 
        id={id}
        src={src}
        width={25}
        height={25}
        alt="Tilemap Tile"
        onClick={() => {clickTile(id, src); setSelectedTile(id.split("-")[1])}}
        onDragStart={(event) => drag(event, id, src)}
        draggable={draggable}
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
        "
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