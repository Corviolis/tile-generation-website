import { userAppStore } from "@/app/utils/store";
import { clearSelectedDirection } from "@/app/utils/menuFunctions";

interface PanelProps {
  id: string;
  onClick: () => void
}

export function Panel({ id, onClick }: PanelProps) {
  const selectedTile = userAppStore((state) => state.selectedTile);
  const setSelectedDir = userAppStore((state) => state.setSelectedDir);

  return (
    <div
      className="
      outer-tile
      w-[100px]
      h-[100px]
      bg-orange-100
      hover:bg-orange-200
      transition-colors
      border-[1px]
      border-[#AD5B18]"
      id={id}
      onClick={() => {
        if (selectedTile == "") return;
        clickPanel(id);
        setSelectedDir(id);
        onClick();
      }}
    ></div>
  );
}

export function clickPanel(id: string) {
  clearSelectedDirection();
  let tile = document.getElementById(id);
  if (tile == null) return;

  tile.style.backgroundColor = "#FB923C";
}
