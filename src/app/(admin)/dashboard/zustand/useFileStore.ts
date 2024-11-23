
import { create } from 'zustand'

interface FilePreviewStore {
    preview: Preview | null;
    setPreview: (preview: Preview) => void;
    clearPreview: () => void;
    updatePreview: (updates: Partial<Preview>) => void;
}

const usePreviewStore = create<FilePreviewStore>((set) => ({
    preview: null,
    setPreview: (preview) => set({ preview }),
    clearPreview: () => set({ preview: null }),
    updatePreview: (updates) => set((state) => ({
        preview: state.preview ? { ...state.preview, ...updates } : null
    }))
}));

export default usePreviewStore;