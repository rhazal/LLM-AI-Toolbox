import { create } from 'zustand';

interface useProModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useProModal = create<useProModalStore>((set) => ({
  isOpen: false,  //🤓Dev:  change to true for development
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));