import { FULLSCREEN, CHANGE_VIEW } from './actionTypes';

export const toggleFullscreen = () => ({ type: FULLSCREEN });
export const changeView = view => ({ type: CHANGE_VIEW, view });
