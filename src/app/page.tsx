"use client";

import {LeftPanel} from "@/app/components/leftPanel";
import {RightPanel} from "@/app/components/rightPanel";

export default function Home() {
  return (
    <main className="flex flex-row h-screen">
      <LeftPanel />
      <RightPanel />
    </main>
  );
}