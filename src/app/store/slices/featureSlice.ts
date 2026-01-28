import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FeatureState {
  enabledFeatures: string[];
}

const initialState: FeatureState = {
  enabledFeatures: [],
};

export const featureSlice = createSlice({
  name: 'feature',
  initialState,
  reducers: {
    setFeatures: (state, action: PayloadAction<string[]>) => {
      state.enabledFeatures = action.payload;
    },
    resetFeatures: (state) => {
      state.enabledFeatures = [];
    },
  },
});

export const { setFeatures, resetFeatures } = featureSlice.actions;
export default featureSlice.reducer;
