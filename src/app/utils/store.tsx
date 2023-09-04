import { create } from 'zustand'

type AppState = {
    selectedTile: string,
    selectedDir: string,
    rules: {[key: string]: {[key: string]: string[]}},

    setSelectedTile: (tile: string) => void,
    setSelectedDir: (dir: string) => void,
    setRules: (rules: {}) => void
}

export const userAppStore = create<AppState>((set) => ({
    selectedTile: "",
    selectedDir: "",
    rules: {},

    setSelectedTile: (tile: string) => set({selectedTile: tile}),
    setSelectedDir: (dir: string) => set({selectedDir: dir}),
    setRules: (rules: {}) => set({rules: rules})
}))