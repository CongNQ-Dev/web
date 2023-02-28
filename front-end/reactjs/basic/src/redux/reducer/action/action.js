import { PLAY_GAME, DAT_CUOC } from "../content/content";
export const playGameAction = () => {
  return {
    type: PLAY_GAME,
  };
};
export const datCuocAction = (quanCuoc) => {
  return {
    type: DAT_CUOC,
    quanCuoc,
  };
};
