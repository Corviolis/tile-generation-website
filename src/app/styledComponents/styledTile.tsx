'use client';

import {DragEventHandler} from "react";

interface TileProps {
    id: string;
    src: string;
    onClick: (id: string, src: string) => void;
    onDragStart: () => void;
}

export default function StyledTile({ id, src, onClick, onDragStart }:TileProps) {
    return (
        <img 
        id={id}
        src={src}
        onClick={() => {onClick(id, src)}}
        onDragStart={onDragStart}
        draggable="true"
        className="
        w-full
        tile"
        />
    )
}

