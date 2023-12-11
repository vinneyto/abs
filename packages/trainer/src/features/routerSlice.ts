import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum CurrentScene {
  SceneSetup = 'sceneSetup',
  SceneChoseMode = 'sceneChoseMode',
}

interface RouterState {
  currentScene: CurrentScene;
}

const initialState: RouterState = {
  currentScene: CurrentScene.SceneSetup,
};

export const routerSlice = createSlice({
  name: 'router',
  initialState,
  reducers: {
    setCurrentScene: (state, action: PayloadAction<CurrentScene>) => {
      state.currentScene = action.payload;
    },
  },
});

export const { setCurrentScene } = routerSlice.actions;
export const routerReducer = routerSlice.reducer;
