import { create } from 'zustand'
import React from "react";

type AppState = {
    selectedTile: string,
    selectedDir: string,
    loadedFile: string,
    rules: {[key: string]: {[key: string]: string[]}},
    tileContainerItems: React.JSX.Element[][],
    dropTileContainerItems: React.JSX.Element[],

    setSelectedTile: (tile: string) => void,
    setSelectedDir: (dir: string) => void,
    setRules: (rules: {}) => void,
    setLoadedFile: (file: string) => void,
    setTileContainerItems: (tiles: React.JSX.Element[][]) => void,
    setDropTileContainerItems: (tiles: React.JSX.Element[]) => void
}

export const userAppStore = create<AppState>((set) => ({
    selectedTile: "",
    selectedDir: "",
    loadedFile: "",
    rules: {},
    tileContainerItems: [[]],
    dropTileContainerItems: [],

    setSelectedTile: (tile: string) => set({selectedTile: tile}),
    setSelectedDir: (dir: string) => set({selectedDir: dir}),
    setLoadedFile: (file: string) => set({loadedFile: file}),
    setRules: (rules: {}) => set({rules: rules}),
    setTileContainerItems: (tiles: React.JSX.Element[][]) => set({tileContainerItems: tiles}),
    setDropTileContainerItems: (tiles: React.JSX.Element[]) => set({dropTileContainerItems: tiles})
}))