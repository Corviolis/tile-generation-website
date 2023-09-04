import Image from 'next/image'
import { clickTile } from '../utils/tileFunctions';
import { userAppStore } from '../utils/store';


interface TileProps {
    id: string;
    src: string;
}

export default function DroppedTile({ id, src }:TileProps) {
    const setSelectedTile = userAppStore((state) => state.setSelectedTile);
    
    return (
        <Image 
        id={id}
        src={src}
        width={25}
        height={25}
        alt="Tilemap Tile"
        onClick={() => {clickTile(id, src); setSelectedTile(id.split("-")[1])}}
        className="
        w-full
        tile
        transition-[border-width]
        duration-[35ms]
        active:duration-0
        active:border-0
        from-[#fb923c2a]
        to-[#693cfb2a]
        bg-gradient-to-b
        "
        />
    )
}