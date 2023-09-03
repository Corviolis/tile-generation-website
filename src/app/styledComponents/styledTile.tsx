'use client';

interface TileProps {
    id: string;
    src: string;
    onClick: () => void;
    onDragStart: () => void;
}

export default function StyledTile({ id, src, onClick, onDragStart }:TileProps) {
    return (
        <img 
        id={id}
        src={src}
        onClick={onClick}
        onDragStart={onDragStart}
        draggable="true"
        className="
        w-full
        tile"
        />
    )
}