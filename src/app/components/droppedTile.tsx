import Image from 'next/image'
import { clickTileImage } from '../utils/tileFunctions';
import { userAppStore } from '../utils/store';
import {deleteRule} from "@/app/utils/ruleFuncitons";


interface DroppedTileProps {
    id: string;
    src: string;
}

export default function DroppedTile({ id, src }:DroppedTileProps) {
    const {dropTileContainerItems, setDropTileContainerItems, setSelectedTile} = userAppStore();
    
    return (
        <Image 
        id={id}
        src={src}
        width={25}
        height={25}
        alt="Tilemap Tile"
        draggable={false}
        onClick={(event) => {
            const tileId = id.split("-")[1];
            if (event.ctrlKey) {
                deleteRule(tileId);

                const newTiles = dropTileContainerItems.filter((tile) => tile.key !== tileId)
                setDropTileContainerItems(newTiles);
            } else {
                clickTileImage(src);
                setSelectedTile(tileId);
            }
        }}
        className="
        xl:w-20
        lg:w-16
        w-14
        tile
        transition-[border-width]
        duration-[35ms]
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