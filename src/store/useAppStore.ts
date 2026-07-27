import { create } from "zustand";

type LocationAtmosphere = "void" | "brutalist-lab" | "coastal-concrete" | "darkroom";

interface StoreState {
  atmosphere: LocationAtmosphere;
  setAtmosphere: (atmosphere: LocationAtmosphere) => void;
}

export const useAppStore = create<StoreState>((set) => ({
  atmosphere: "void",
  setAtmosphere: (atmosphere) => set({ atmosphere }),
}));
