import {userAppStore} from "@/app/utils/store";
import {clearSelectedDirection} from "@/app/utils/menuFunctions";

interface PanelProps {
    id: string;
}

export function Panel({ id }:PanelProps) {
    const selectedTile = userAppStore((state) => state.selectedTile);
    const setSelectedDir = userAppStore((state) => state.setSelectedDir);

    return (
      <div className="outer-tile w-[100px] h-[100px] bg-white border-2 border-[#ccc]" id={id} onClick={() => {
          if (selectedTile == null) return;
          clickPanel(id);
          setSelectedDir(id);
      }}></div>
    )
}

export function clickPanel(id: string) {
    clearSelectedDirection();
    let tile= document.getElementById(id);
    if (tile == null) return;

    tile.style.backgroundColor = "#FB923C";
}