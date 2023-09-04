'use client';

import {DragEventHandler} from "react";
import Image from 'next/image'
import missingTexture from '../../../public/gridbase.png'

interface TileProps {
    id: string;
    src: string;
    onClick: (id: string, src: string) => void;
    onDragStart: () => void;
}

export default function StyledTile({ id, src, onClick, onDragStart }:TileProps) {
    return (
        <Image 
        id={id}
        src={src}
        width={25}
        height={25}
        alt="Tilemap Tile"
        onClick={() => {onClick(id, src)}}
        onDragStart={onDragStart}
        draggable="true"
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

